import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDkNnTJsjVL6Cp-XlV-WKhiAwDztwYvKjY',
  authDomain: 'crwn-db-d024b.firebaseapp.com',
  databaseURL: 'https://crwn-db-d024b.firebaseio.com',
  projectId: 'crwn-db-d024b',
  storageBucket: 'crwn-db-d024b.appspot.com',
  messagingSenderId: '1056453125684',
  appId: '1:1056453125684:web:8d25dc1e71ee68885b0c61',
  measurementId: 'G-4E2HDG2GHC'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
