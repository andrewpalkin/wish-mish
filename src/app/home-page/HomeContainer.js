import { connect } from "react-redux";
import HomeComponent from "./HomeComponent";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const mapStateToProps = state => {
  return {
    wishesOpen: state.firestore ? state.firestore.ordered.wishesOpen : [],
    wishesComplete: state.firestore
      ? state.firestore.ordered.wishesComplete
      : []
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
  firestoreConnect([
    {
      collection: "wishes",
      where: [["status", "==", "open"]],
      orderBy: ["publishedDate", "desc"],
      storeAs: "wishesOpen",
      limit: 4
    },
    {
      collection: "wishes",
      where: [["status", "==", "complete"]],
      orderBy: ["publishedDate", "desc"],
      storeAs: "wishesComplete",
      limit: 3
    }
  ])
)(HomeComponent);

export default HomeContainer;
