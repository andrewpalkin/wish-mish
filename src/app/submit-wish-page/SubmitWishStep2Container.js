import { connect } from "react-redux";
import { submit } from "redux-form";
import SubmitWishStep2Component from "./SubmitWishStep2Component";

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
    handleSubmitWishDeliveryFormStep2: () =>
      dispatch(submit("wish-details-step2"))
  };
};

const SubmitWishStep2Coontainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitWishStep2Component);

export default SubmitWishStep2Coontainer;
