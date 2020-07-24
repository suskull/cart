import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDZHTEXNCZDINFpwbaD8qa_JlsGxF78ikM",
    authDomain: "cart-b4763.firebaseapp.com",
    databaseURL: "https://cart-b4763.firebaseio.com",
    projectId: "cart-b4763",
    storageBucket: "cart-b4763.appspot.com",
    messagingSenderId: "916937137734",
    appId: "1:916937137734:web:bbafd2b5561df7ea06f447",
    measurementId: "G-X3QHW22WLQ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithRedirect = () => auth.signInWithRedirect(provider);
export default firebase;