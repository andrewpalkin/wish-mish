import types from "./types";

const INITIAL_STATE = {};
const submitWishReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SUBMIT_WISH_REQUEST: {
      return {
        ...state,
        showSpinner: true
      };
    }

    case types.SUBMIT_WISH_SUCCESS: {
      const { submitWishResponse } = action;
      return {
        ...state,
        submitWishResponse,
        showSpinner: false
      };
    }

    case types.SUBMIT_WISH_FAILURE: {
      const { submitWishError } = action;
      return {
        ...state,
        showSpinner: false,
        submitWishError
      };
    }

    default:
      return state;
  }
};

export default submitWishReducer;
