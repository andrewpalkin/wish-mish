import { connect } from "react-redux";
import WishDetailsMainComponent from "./WishDetailsMainComponent";
import { submit, reset } from "redux-form";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const mapStateToProps = (state, ownProps) => {
  const wishId = ownProps.match.params.id;
  const wishes = state.firestore.data.wishes;
  const wishDetails = wishes ? wishes[wishId] : null;
  return {
    wishDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const HomeContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "wishes" }])
)(WishDetailsMainComponent);

export default HomeContainer;
