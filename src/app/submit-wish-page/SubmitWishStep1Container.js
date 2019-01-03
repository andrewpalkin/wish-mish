import { connect } from "react-redux";
import { submit } from "redux-form";
import SubmitWishStep1Component from "./SubmitWishStep1Component";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmitWishDetailsFormStep1: () =>
      dispatch(submit("wishDetailsStep1Form"))
  };
};

const SubmitWishStep1Coontainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitWishStep1Component);

export default SubmitWishStep1Coontainer;
