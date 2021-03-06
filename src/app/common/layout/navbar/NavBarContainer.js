import { connect } from "react-redux";
import NavBarComponent from "./NavBarComponent";
import { authOperations } from "../../../apis/auth-duck-api";

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    userName: state.firebase.profile.firstName,
    initials: state.firebase.profile.initials
  };
};

const mapDispatchToProps = dispatch => {
  const signout = () => {
    dispatch(authOperations.signoutOperation());
  };

  const cleanLoginError = () => {
    dispatch(authOperations.cleanLoginErrorOperation());
  };

  return {
    signout,
    cleanLoginError
  };
};

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarComponent);

export default NavBarContainer;
