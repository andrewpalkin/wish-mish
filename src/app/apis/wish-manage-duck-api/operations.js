// operations.js
import { Creators } from "./actions";
const submitWishRequest = Creators.submitWishRequest;
const submitWishSuccess = Creators.submitWishSuccess;
const submitWishFailure = Creators.submitWishFailure;

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

export default {
  submitWishOperation
};
