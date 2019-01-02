import { connect } from "react-redux";
import { submit } from "redux-form";
import SubmitWishStep3Component from "./SubmitWishStep3Component";

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
    handleSubmitWishConfirmationStep3: () => dispatch()
  };
};

const SubmitWishStep3Coontainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitWishStep3Component);

export default SubmitWishStep3Coontainer;
