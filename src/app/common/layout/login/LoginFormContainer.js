import { connect } from "react-redux";
import LoginFormComponent from "./LoginFormComponent";
import { authOperations } from "../../../apis/auth-duck-api";

const mapDispatchToProps = dispatch => {
  // 'fetchSubredditJson()' will trigger fetching of JSON data from
  // the Reddit API and pushes the relevant data into the Redux store.
  const login = loginFormData => {
    console.log("loginFormDataContainer-> loginFormData: ", loginFormData);
    //dispatch(submitWishOperations.submitWishOperation(loginFormData));
    dispatch(authOperations.loginOperation(loginFormData));
    alert("loginFormData successfully");
  };

  return {
    login
  };
};

const LoginFormContainer = connect(
  null,
  mapDispatchToProps
)(LoginFormComponent);

export default LoginFormContainer;
