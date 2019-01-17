import { connect } from "react-redux";
import NavBarComponent from "./NavBarComponent";
import { authOperations } from "../../../apis/auth-duck-api";

const mapStateToProps = state => {
  return {
    loginFailed: state.auth.loginError,
    loginSuccess: state.auth.loginSuccess
  };
};

const mapDispatchToProps = dispatch => {
  const methodeName = inputData => {
    console.log("loginFormDataContainer-> loginFormData: ", inputData);
    //dispatch(submitWishOperations.submitWishOperation(loginFormData));
    //dispatch(authOperations.loginOperation(loginFormData));
  };

  return {
    methodeName
  };
};

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarComponent);

export default NavBarContainer;
