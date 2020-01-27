import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDDmtlc3nSY0a9VPuYIga72aqITke772Gk',
  authDomain: 'crwn-clothing-252be.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-252be.firebaseio.com',
  projectId: 'crwn-clothing-252be',
  storageBucket: 'crwn-clothing-252be.appspot.com',
  messagingSenderId: '786180365871',
  appId: '1:786180365871:web:3421648c8b5f23d201f0da',
  measurementId: 'G-EQNCLDJ88N'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
