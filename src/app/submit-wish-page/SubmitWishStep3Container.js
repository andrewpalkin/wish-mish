import { connect } from "react-redux";
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
  // 'fetchSubredditJson()' will trigger fetching of JSON data from
  // the Reddit API and pushes the relevant data into the Redux store.

  return {};
};

const SubmitWishStep3Coontainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitWishStep3Component);

export default SubmitWishStep3Coontainer;
