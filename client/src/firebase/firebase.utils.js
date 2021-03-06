import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const config = {
  apiKey: 'AIzaSyABLuabkqoeNvr9P9MDE3SNyjxoL3HsPcw',
  authDomain: 'crn-clothing-db.firebaseapp.com',
  databaseURL: 'https://crn-clothing-db.firebaseio.com',
  projectId: 'crn-clothing-db',
  storageBucket: 'crn-clothing-db.appspot.com',
  messagingSenderId: '434451661983',
  appId: '1:434451661983:web:28d250feec82fd28',
}

// Initialize Firebase
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Setup Signin with Google
export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
googleProvider.addScope('profile')
googleProvider.addScope('email')
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

// Create User
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

// create (default) Collection
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return batch.commit()
}

// convert the collection data that got pulled from firestore to include routes and correct key
export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  })

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection
    return acc
  }, {})
}

// convert firebase promised-based API, so it can be used in redux saga with async/await generators
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

export default firebase
