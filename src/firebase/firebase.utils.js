import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAO0weHaADaCfQV7kxx_XmnrgeWFfRjYRY",
  authDomain: "hats-6c074.firebaseapp.com",
  databaseURL: "https://hats-6c074.firebaseio.com",
  projectId: "hats-6c074",
  storageBucket: "hats-6c074.appspot.com",
  messagingSenderId: "332150702776",
  appId: "1:332150702776:web:59f9da2f1f3419b41a2a4d",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
