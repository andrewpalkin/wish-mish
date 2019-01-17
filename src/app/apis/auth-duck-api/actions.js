import { createActions } from "reduxsauce";

const { Creators, Types } = createActions({
  loginRequest: ["loginData"],
  loginSuccess: ["loginResponse"],
  loginFailure: ["loginError"]
});

export { Creators, Types };
