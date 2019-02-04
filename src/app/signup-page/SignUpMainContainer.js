import { connect } from "react-redux";
import SignUpMainComponent from "./SignUpMainComponent";
import { authOperations } from "../apis/auth-duck-api";

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  const signup = signupPayload => {
    console.log("signupContiner-> signupPayload: ", signupPayload);
    //dispatch(submitWishOperations.submitWishOperation(loginFormData));
    dispatch(authOperations.signupOperation(signupPayload));
  };

  return {
    signup
  };
};

const SignUpMainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpMainComponent);

export default SignUpMainContainer;
