import { connect } from "react-redux";
import WishDetailsMainComponent from "./WishDetailsMainComponent";
import { submit, reset } from "redux-form";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { submitWishOperations } from "../apis/wish-manage-duck-api";

const mapStateToProps = (state, ownProps) => {
  const wishId = ownProps.match.params.id;
  const wishes = state.firestore.data.wishes;
  const wishDetails = wishes ? wishes[wishId] : null;
  const makeYourOfferShowSpinner = state.submitWish.makeYourOfferShowSpinner;
  const makeYourOfferStatus = state.submitWish.makeYourOfferStatus;
  const offers = state.firestore ? state.firestore.ordered.offers : [];

  return {
    wishDetails,
    wishId,
    makeYourOfferShowSpinner,
    makeYourOfferStatus,
    offers
  };
};

const mapDispatchToProps = dispatch => {
  const submitWishOffer = wishId => {
    console.log("submitWishOFferContainer-> submitWishOfferData: ");
    dispatch(submitWishOperations.submitWishOfferOperation(wishId));
  };

  const clearSubmitWishOfferDataOperation = () => {
    console.log(
      "submitWishOFferContainer-> clearSubmitWishOfferDataOperation: "
    );
    dispatch(submitWishOperations.clearSubmitWishOfferDataOperation());
  };
  return { submitWishOffer, clearSubmitWishOfferDataOperation };
};

const HomeContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => {
    return [
      { collection: "wishes" },
      {
        collection: "offers",
        where: ["wishId", "==", props.wishId],
        orderBy: [["createdDate", "desc"]]
      }
    ];
  })
)(WishDetailsMainComponent);

export default HomeContainer;
