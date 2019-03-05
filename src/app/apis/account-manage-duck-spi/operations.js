// operations.js
import {Creators} from "./actions";

const cancelWishRequest = Creators.cancelWishRequest;
const cancelWishSuccess = Creators.cancelWishSuccess;
const cancelWishFailure = Creators.cancelWishFailure;

const cancelWishAccountMainComponent = wishId => {
    console.log("wishId -> " + wishId);
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        dispatch(cancelWishRequest());
        const firestore = getFirestore();

        firestore
            .collection("wishes")
            .doc(wishId)
            .delete()
            .then(() => {
                firestore.collection("offers")
                    .where("wishId", "==", wishId)
                    .get()
                    .then((context) => {
                        context.forEach((doc) => {
                            doc.ref.delete()
                                .then(response => {
                                    dispatch(cancelWishSuccess(response));
                                })
                                .catch(error => {
                                    dispatch(cancelWishFailure(error));
                                });
                        })
                    })
            })
            .then(response => {
                dispatch(cancelWishSuccess(response));
            })
            .catch(error => {
                dispatch(cancelWishFailure(error));
            });
    };
};

export default {
    cancelWishAccountMainComponent
};
