import { connect } from "react-redux";
import SubmitWishMainComponent from "./SubmitWishMainComponent";

const mapStateToProps = state => {
  let formDataStep1 = state.form.wishDetailsStep1Form
    ? state.form.wishDetailsStep1Form.values
    : "";
  let formDataStep2 = state.form.wishDetailsStep2Form
    ? state.form.wishDetailsStep2Form.values
    : "";
  let formDataStep3 = state.form.wishDetailsStep3Form
    ? state.form.wishDetailsStep3Form.values
    : "";

  console.log("wishDetailsStep1Form: ", formDataStep1);
  console.log("wishDetailsStep2Form: ", formDataStep2);
  console.log("wishDetailsStep3Form: ", formDataStep3);
  return state.form.wishDetailsStep1Form
    ? {
        formDataStep1,
        formDataStep2,
        formDataStep3
      }
    : {};
};

const mapDispatchToProps = dispatch => {
  // 'fetchSubredditJson()' will trigger fetching of JSON data from
  // the Reddit API and pushes the relevant data into the Redux store.

  return {};
};

const SubmitWishMainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitWishMainComponent);

export default SubmitWishMainContainer;
