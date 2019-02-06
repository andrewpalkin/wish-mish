import types from "./types";

const INITIAL_STATE = {};
const submitWishReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SUBMIT_WISH_REQUEST: {
      return {
        ...state,
        submitWishShowSpinner: true
      };
    }

    case types.SUBMIT_WISH_SUCCESS: {
      const { submitWishResponse } = action;
      console.log("submit-reducer: ", submitWishResponse);
      return {
        ...state,
        submitWishSucced: true,
        submitWishShowSpinner: false
      };
    }

    case types.SUBMIT_WISH_FAILURE: {
      const { submitWishError } = action;
      return {
        ...state,
        submitWishShowSpinner: false,
        submitWishSucced: false
      };
    }

    default:
      return state;
  }
};

export default submitWishReducer;
