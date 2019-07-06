import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const config = {
  apiKey: 'AIzaSyABLuabkqoeNvr9P9MDE3SNyjxoL3HsPcw',
  authDomain: 'crn-clothing-db.firebaseapp.com',
  databaseURL: 'https://crn-clothing-db.firebaseio.com',
  projectId: 'crn-clothing-db',
  storageBucket: '',
  messagingSenderId: '434451661983',
  appId: '1:434451661983:web:28d250feec82fd28'
}

// Initialize Firebase
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Setup Signin with Google
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
provider.addScope('profile')
provider.addScope('email')
export const signInWithGoogle = () => auth.signInWithPopup(provider)

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
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

export default firebase