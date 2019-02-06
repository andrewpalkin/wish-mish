import { connect } from "react-redux";
import SubmitWishMainComponent from "./SubmitWishMainComponent";
import { submit, reset } from "redux-form";
import { submitWishOperations } from "../apis/wish-manage-duck-api";

const mapStateToProps = state => {
  let formDataStep1 = state.form.wishDetailsStep1Form
    ? state.form.wishDetailsStep1Form.values
    : "";
  let formDataStep2 = state.form.wishDetailsStep2Form
    ? state.form.wishDetailsStep2Form.values
    : "";

  console.log("wishDetailsStep1Form: ", formDataStep1);
  console.log("wishDetailsStep2Form: ", formDataStep2);
  return state.form.wishDetailsStep1Form
    ? {
        formDataStep1,
        formDataStep2,
        userId: state.firebase.auth.uid,
        initials: state.firebase.profile.initials,
        firstName: state.firebase.profile.firstName,
        submitWishShowSpinner: state.submitWish.submitWishShowSpinner,
        submitWishSucced: state.submitWish.submitWishSucced
      }
    : {};
};

const mapDispatchToProps = dispatch => {
  // 'fetchSubredditJson()' will trigger fetching of JSON data from
  // the Reddit API and pushes the relevant data into the Redux store.
  const handleSubmitWishDetailsFormStep1 = () => {
    dispatch(submit("wishDetailsStep1Form"));
  };

  const handleSubmitWishDetailsFormStep2 = () => {
    dispatch(submit("wishDetailsStep2Form"));
  };

  const publishWish = submitWishData => {
    console.log("submitWishContainer-> submitWishData: ", submitWishData);
    dispatch(submitWishOperations.submitWishOperation(submitWishData));
  };

  return {
    handleSubmitWishDetailsFormStep1,
    handleSubmitWishDetailsFormStep2,
    publishWish
  };
};

const SubmitWishMainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitWishMainComponent);

export default SubmitWishMainContainer;
