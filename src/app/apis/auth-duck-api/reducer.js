import types from "./types";

const INITIAL_STATE = { loginSuccess: false, loginError: null };
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
      console.log("LOGIN_SUCCESS: ", loginResponse);
      return {
        ...state,
        loginSuccess: true,
        showSpinner: false
      };
    }

    case types.LOGIN_FAILURE: {
      return {
        ...state,
        showSpinner: false,
        loginError: "Login Failed"
      };
    }

    default:
      return state;
  }
};

export default authReducer;
