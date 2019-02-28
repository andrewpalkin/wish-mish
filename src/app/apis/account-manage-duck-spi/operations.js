// operations.js
import { Creators } from "./actions";

const cancelWishRequest = Creators.cancelWishRequest;
const cancelWishSuccess = Creators.cancelWishSuccess;
const cancelWishFailure = Creators.cancelWishFailure;

const cancelWishAccountMainComponent = (wishId, offerId) =>{
    console.log("wishId -> " + wishId + "offerId -> " + offerId);
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        dispatch(cancelWishRequest());
        const firestore = getFirestore();

        firestore
            .collection("wishes")
            .doc(wishId)
            .update({
                status: "complete"
            })
            .then(() => {
                firestore
                    .collection("offers")
                    .doc(offerId)
                    .update({status: "accepted"})
            })
            .then(acceptOfferResponse => {
                dispatch(cancelWishSuccess(acceptOfferResponse));
            })
            .catch(acceptOfferError => {
                dispatch(cancelWishFailure(acceptOfferError));
            });
    };
};


export default {
    cancelWishAccountMainComponent
};
