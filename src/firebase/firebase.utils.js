import firebase from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyClJ9Dx7w7tW68hge25oP__LF83QB_qyYA",
    authDomain: "crowndb-87daa.firebaseapp.com",
    projectId: "crowndb-87daa",
    storageBucket: "crowndb-87daa.appspot.com",
    messagingSenderId: "637819290190",
    appId: "1:637819290190:web:4217526e0690a85076791f",
    measurementId: "G-XMKZQVN7KT"
  }

firebase.initializeApp(config);

//seting functions needed for google auth

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//gives access to provider class in the auth library
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;