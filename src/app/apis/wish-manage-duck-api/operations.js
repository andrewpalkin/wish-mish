// operations.js
import { Creators } from "./actions";
const submitWishRequest = Creators.submitWishRequest;
const submitWishSuccess = Creators.submitWishSuccess;
const submitWishFailure = Creators.submitWishFailure;

const submitWishOfferRequest = Creators.submitWishOfferRequest;
const submitWishOfferSuccess = Creators.submitWishOfferSuccess;
const submitWishOfferFailure = Creators.submitWishOfferFailure;

const submitWishOfferClear = Creators.submitWishOfferClear;

const submitWishOperation = submitWishData => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Dispatching this action will toggle the 'showRedditSpinner'
    // flag in the store, so that the UI can show a loading icon.
    dispatch(submitWishRequest());
    const firestore = getFirestore();
    const history = submitWishData.history;
    delete submitWishData.history;
    firestore
      .collection("wishes")
      .add({
        ...submitWishData,
        stam: "vovaTest"
      })
      .then(submitWishResponse => {
        dispatch(submitWishSuccess(submitWishResponse));
        history.push("/app");
      })
      .catch(submitWishError => {
        dispatch(submitWishFailure(submitWishError));
      });
  };
};

const submitWishOfferOperation = wishId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Dispatching this action will toggle the 'showRedditSpinner'
    // flag in the store, so that the UI can show a loading icon.
    dispatch(submitWishOfferRequest());
    const firestore = getFirestore();
    const createdDate = new Date();
    const store = getState();
    console.log("Our State :", getState);
    console.log("We are looking for wish ID: " + wishId);
    firestore
      .collection("offers")
      .add({
        ...store.form.makeYourOfferForm.values,
        userId: store.firebase.auth.uid,
        wishId,
        createdDate
      })
      .then(submitWishResponse => {
        dispatch(submitWishOfferSuccess(submitWishResponse));
      })
      .catch(submitWishError => {
        dispatch(submitWishOfferFailure(submitWishError));
      });
  };
};

const clearSubmitWishOfferDataOperation = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Dispatching this action will toggle the 'showRedditSpinner'
    // flag in the store, so that the UI can show a loading icon.
    dispatch(submitWishOfferClear());
  };
};

export default {
  submitWishOperation,
  submitWishOfferOperation,
  clearSubmitWishOfferDataOperation
};
