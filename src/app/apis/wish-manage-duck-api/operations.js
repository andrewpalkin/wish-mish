// operations.js
import { Creators } from "./actions";

const submitWishRequest = Creators.submitWishRequest;
const submitWishSuccess = Creators.submitWishSuccess;
const submitWishFailure = Creators.submitWishFailure;

const submitWishOperation = submitWishData => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Dispatching this action will toggle the 'showRedditSpinner'
    // flag in the store, so that the UI can show a loading icon.
    dispatch(submitWishRequest(submitWishData));
    const firestore = getFirestore();
    firestore
      .collection("wishes")
      .add({
        ...submitWishData,
        stam: "vovaTest"
      })
      .then(submitWishResponse => {
        dispatch(submitWishSuccess(submitWishResponse));
      })
      .catch(submitWishError => {
        dispatch(submitWishFailure(submitWishError));
      });
  };
};

export default {
  submitWishOperation
};
