import { takeLatest, put, all, call } from "redux-saga/effects";
import { userActionTypes } from "./user.types";
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils'
import { googleSignInSuccesss,googleSignInFailure, emailSignInSuccesss, emailSignInFailure, signOutFailure, signOutSuccess } from "./user.actions";


export function* signInWithGoogle() {
    try {
       const {user} = yield auth.signInWithPopup(googleProvider)
        //console.log(userRef);
        const userRef = yield call(createUserProfileDocument, user)
        const userSnapshot = yield userRef.get();
        yield put(
            googleSignInSuccesss({id: userSnapshot.id, ...userSnapshot.data()})
        );
    } catch(error) {
        yield put(
            googleSignInFailure(error)
        );
    }
}

export function* signInWithEmail({payload: {email,password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email,password);
        const userRef = yield call(createUserProfileDocument, user)
        const userSnapshot = yield userRef.get();
        yield put(
            emailSignInSuccesss({id: userSnapshot.id, ...userSnapshot.data()})
        );
    } catch(error) {
        yield put(emailSignInFailure(error))
    }
}

//session persist
export function* isUserAuthienticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        const userRef = yield call(createUserProfileDocument, userAuth)
        const userSnapshot = yield userRef.get();
        yield put(
            emailSignInSuccesss({id: userSnapshot.id, ...userSnapshot.data()})
        );
    } catch(error) {
        yield put(emailSignInFailure(error));
    }
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch(error) {
        yield put(signOutFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}

export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION,isUserAuthienticated)
}

export function* onSignOutStart () {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}


export function* userSagas() {
    yield all([call(onGoogleSignInStart),call(onEmailSignInStart), call(onCheckUserSession), call(onSignOutStart)])
}

