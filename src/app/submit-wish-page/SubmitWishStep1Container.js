import { connect } from "react-redux";
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
  // 'fetchSubredditJson()' will trigger fetching of JSON data from
  // the Reddit API and pushes the relevant data into the Redux store.

  return {};
};

const SubmitWishStep1Coontainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitWishStep1Component);

export default SubmitWishStep1Coontainer;
