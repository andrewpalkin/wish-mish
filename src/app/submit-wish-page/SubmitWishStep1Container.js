import { connect } from "react-redux";
import { submit } from "redux-form";
import SubmitWishStep1Component from "./SubmitWishStep1Component";

const mapStateToProps = state => {
  return state.form.profile
    ? {
        submitSucceeded: state.form.profile.submitSucceeded,
        values: state.form.profile.values
      }
    : {};
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmitWishDetailsFormStep1: () =>
      dispatch(submit("wish-details-step1"))
  };
};

const SubmitWishStep1Coontainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitWishStep1Component);

export default SubmitWishStep1Coontainer;
