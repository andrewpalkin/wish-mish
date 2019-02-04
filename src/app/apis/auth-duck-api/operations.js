// operations.js
import { Creators } from "./actions";
import { Redirect } from "react-router-dom";
const loginRequest = Creators.loginRequest;
const loginSuccess = Creators.loginSuccess;
const loginFailure = Creators.loginFailure;

const signupRequest = Creators.signupRequest;
const signupSuccess = Creators.signupSuccess;
const signupFailure = Creators.signupFailure;

const signoutRequest = Creators.signoutRequest;
const signoutSuccess = Creators.signoutSuccess;
const signoutFailure = Creators.signoutFailure;

const cleanLoginError = Creators.cleanLoginError;

const cleanLoginErrorOperation = () => {
  return (dispatch, getState) => {
    // Dispatching this action will toggle the 'showRedditSpinner'
    // flag in the store, so that the UI can show a loading icon.
    console.log("cleanLoginError - : ");
    dispatch(cleanLoginError());
  };
};

const loginOperation = loginData => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Dispatching this action will toggle the 'showRedditSpinner'
    // flag in the store, so that the UI can show a loading icon.
    console.log("loginOperation - : ", loginData);
    dispatch(loginRequest(loginData));
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(loginData.loginEmail, loginData.loginPassword)
      .then(() => {
        dispatch(loginSuccess());
        console.log("loginSuccess - : ", loginData);
        <Redirect to="/" />;
      })
      .catch(err => {
        dispatch(loginFailure(err));
      });
  };
};

const signupOperation = signupPayload => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Dispatching this action will toggle the 'showRedditSpinner'
    // flag in the store, so that the UI can show a loading icon.
    console.log("signupOperation - : ", signupPayload);
    dispatch(signupRequest(signupPayload));
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        signupPayload.email,
        signupPayload.password
      )
      .then(res => {
        // dispatch(signupSuccess(res.user));
        // console.log("signUpSuccess - : ", res.user);
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            firstName: signupPayload.firstName,
            lastName: signupPayload.lastName,
            initials: signupPayload.firstName[0] + signupPayload.lastName[0]
          });
      })
      .then(() => {
        dispatch(signupSuccess());
      })
      .catch(err => {
        dispatch(signupFailure(err));
      });
  };
};

const signoutOperation = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Dispatching this action will toggle the 'showRedditSpinner'
    // flag in the store, so that the UI can show a loading icon.
    console.log("loginOperation - : ");
    dispatch(signoutRequest());
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(signoutSuccess());
        console.log("signoutSuccess - : ");
      })
      .catch(err => {
        dispatch(signoutFailure(err));
      });
  };
};

export default {
  loginOperation,
  signupOperation,
  signoutOperation,
  cleanLoginErrorOperation
};
