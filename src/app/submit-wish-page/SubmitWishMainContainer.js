import { connect } from "react-redux";
import SubmitWishMainComponent from "./SubmitWishMainComponent";

const mapStateToProps = state => {
  return state.form.wishDetailsStep1Form
    ? {
        formDataStep1: state.form.wishDetailsStep1Form.values,
        formDataStep2: state.form.wishDetailsStep1Form.values,
        formDataStep3: state.form.wishDetailsStep1Form.values
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
