import { connect } from "react-redux";
import LoginFormComponent from "./LoginFormComponent";
import { authOperations } from "../../../apis/auth-duck-api";

const mapStateToProps = state => {
  return {
    loginError: state.auth.loginError
  };
};

const mapDispatchToProps = dispatch => {
  const login = loginFormData => {
    console.log("loginFormDataContainer-> loginFormData: ", loginFormData);
    //dispatch(submitWishOperations.submitWishOperation(loginFormData));
    dispatch(authOperations.loginOperation(loginFormData));
  };

  return {
    login
  };
};

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormComponent);

export default LoginFormContainer;
