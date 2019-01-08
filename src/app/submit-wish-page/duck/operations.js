// operations.js
import Creators from "./actions";

const submitWishRequest = Creators.submitWishRequest;
const submitWishSuccess = Creators.submitWishSuccess;
const submitWishFailure = Creators.submitWishFailure;

const submitWishOperation = submitWishData => {
  return dispatch => {
    // Dispatching this action will toggle the 'showRedditSpinner'
    // flag in the store, so that the UI can show a loading icon.

    dispatch(submitWishRequest(submitWishData));

    dispatch(submitWishFailure(submitWishError));

    dispatch(submitWishSuccess(submitWishResponse));
  };
};

export default {
  submitWishOperation
};
