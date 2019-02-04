import React from "react";
import { Redirect } from "react-router-dom";
import SignupForm from "./SignUpFormComponent";

const onSubmitLogin = () => {};

const Signup = props => {
  return props.auth.uid ? (
    <Redirect to="/app" />
  ) : (
    <SignupForm signup={props.signup} onSubmit={onSubmitLogin} />
  );
};

export default Signup;
