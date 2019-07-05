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

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
