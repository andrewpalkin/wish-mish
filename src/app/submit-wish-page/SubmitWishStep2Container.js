import { connect } from "react-redux";
import { submit } from "redux-form";
import SubmitWishStep2Component from "./SubmitWishStep2Component";

const mapStateToProps = state => {
  return state.form.wishDetailsStep2Form
    ? {
        submitSucceeded: state.form.wishDetailsStep2Form.submitSucceeded,
        values: state.form.wishDetailsStep2Form.values
      }
    : {};
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmitWishDeliveryFormStep2: () =>
      dispatch(submit("wishDetailsStep2Form"))
  };
};

const SubmitWishStep2Coontainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitWishStep2Component);

export default SubmitWishStep2Coontainer;
