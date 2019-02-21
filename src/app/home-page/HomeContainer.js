import { connect } from "react-redux";
import HomeComponent from "./HomeComponent";
import { submit, reset } from "redux-form";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const mapStateToProps = state => {
  return {
    wishes: state.firestore ? state.firestore.ordered.wishes : []
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
      limit: 4
    }
  ])
)(HomeComponent);

export default HomeContainer;
