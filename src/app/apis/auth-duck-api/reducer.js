import types from "./types";

const INITIAL_STATE = {};
const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      return {
        ...state,
        showSpinner: true
      };
    }

    case types.LOGIN_SUCCESS: {
      const { loginResponse } = action;
      console.log("login-reducer: ", loginResponse);
      return {
        ...state,
        loginResponse,
        showSpinner: false
      };
    }

    case types.LOGIN_FAILURE: {
      const { loginError } = action;
      return {
        ...state,
        showSpinner: false,
        loginError
      };
    }

    default:
      return state;
  }
};

export default authReducer;
