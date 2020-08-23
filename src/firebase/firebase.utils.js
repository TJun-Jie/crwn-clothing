import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB300oTqh8H8bR1W1DBKeNid4wqHyY9iCw",
    authDomain: "crwn-db-14f63.firebaseapp.com",
    databaseURL: "https://crwn-db-14f63.firebaseio.com",
    projectId: "crwn-db-14f63",
    storageBucket: "crwn-db-14f63.appspot.com",
    messagingSenderId: "359858149901",
    appId: "1:359858149901:web:d63ca2b7ca3e3871ab1344",
    measurementId: "G-QXZDZRHJ7F"
  };
  
  firebase.initializeApp(config);

  export const auth  = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;