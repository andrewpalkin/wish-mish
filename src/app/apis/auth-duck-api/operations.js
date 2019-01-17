// operations.js
import { Creators } from "./actions";

const loginRequest = Creators.loginRequest;
const loginSuccess = Creators.loginSuccess;
const loginFailure = Creators.loginFailure;

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
        dispatch(loginSuccess);
        console.log("loginSuccess - : ", loginData);
      })
      .catch(err => {
        dispatch(loginFailure(err));
      });
  };
};

export default {
  loginOperation
};
