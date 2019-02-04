import { createActions } from "reduxsauce";

const { Creators, Types } = createActions({
  loginRequest: ["loginData"],
  loginSuccess: ["loginResponse"],
  loginFailure: ["loginError"],

  signupRequest: ["signupPayload"],
  signupSuccess: ["signupResponse"],
  signupFailure: ["signupError"],

  signoutRequest: ["signoutPayload"],
  signoutSuccess: ["signoutResponse"],
  signoutFailure: ["signoutError"],
  cleanLoginError: []
});

export { Creators, Types };
