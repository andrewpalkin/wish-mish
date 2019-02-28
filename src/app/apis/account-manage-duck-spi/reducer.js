import types from "./types";

const INITIAL_STATE = {};
const accountDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CANCEL_WISH_REQUEST: {
      return{
        ...state
      };
    }

    case types.CANCEL_WISH_SUCCESS: {
      return{
        ...state
      };
    }

    case types.CANCEL_WISH_FAILURE: {
      return{
        ...state
      };
    }

    default:
      return state;
  }
};

export default accountDetailsReducer;
