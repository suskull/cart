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

// create data to firebase
export const createUserProfileDocument = async (userAuth, addionalData) => {
    if(!userAuth) return;
    // create ref
    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get();

    //check if ref is exist then create additional data
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...addionalData
            })
        }
        catch(error) {
            console.log('error', error.message);

        }
    }

    return userRef;
}


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef,obj)
    });

    return await batch.commit();

};

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            id:doc.id,
            routeName: encodeURI(title),
            title,
            items
        }
    })

    return transformedCollection.reduce((accumulator, collection)=>{
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{})


}
export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        },reject)
    })
}
firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
//export const signInWithRedirect = () => auth.signInWithRedirect(googleProvider);
export default firebase;