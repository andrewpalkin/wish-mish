// operations.js
import {Creators} from "./actions";

const submitWishRequest = Creators.submitWishRequest;
const submitWishSuccess = Creators.submitWishSuccess;
const submitWishFailure = Creators.submitWishFailure;

const submitWishOfferRequest = Creators.submitWishOfferRequest;
const submitWishOfferSuccess = Creators.submitWishOfferSuccess;
const submitWishOfferFailure = Creators.submitWishOfferFailure;

const submitWishOfferClear = Creators.submitWishOfferClear;

const acceptOfferRequest = Creators.acceptOfferRequest;
const acceptOfferSuccess = Creators.acceptOfferSuccess;
const acceptOfferFailure = Creators.acceptOfferFailure;

const acceptOfferOperation = (wishId, offerId) => {
    console.log("wishId -> " + wishId + "offerId -> " + offerId);
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        dispatch(acceptOfferRequest());
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
                dispatch(acceptOfferSuccess(acceptOfferResponse));
            })
            .catch(acceptOfferError => {
                dispatch(acceptOfferFailure(acceptOfferError));
            });
    };
};


const submitWishOperation = submitWishData => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        dispatch(submitWishRequest());
        const firestore = getFirestore();
        const history = submitWishData.history;
        delete submitWishData.history;
        firestore
            .collection("wishes")
            .add({
                ...submitWishData,
                status: "open"
            })
            .then(submitWishResponse => {
                dispatch(submitWishSuccess(submitWishResponse));
                history.push("/app");
            })
            .catch(submitWishError => {
                dispatch(submitWishFailure(submitWishError));
            });
    };
};

const submitWishOfferOperation = wishId => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        dispatch(submitWishOfferRequest());
        const firestore = getFirestore();
        const createdDate = new Date();
        const store = getState();
        firestore
            .collection("offers")
            .add({
                ...store.form.makeYourOfferForm.values,
                userId: store.firebase.auth.uid,
                firstName: store.firebase.profile.firstName,
                lastName: store.firebase.profile.lastName,
                initials: store.firebase.profile.initials,
                wishId,
                createdDate
            })
            .then(submitWishResponse => {
                dispatch(submitWishOfferSuccess(submitWishResponse));
            })
            .catch(submitWishError => {
                dispatch(submitWishOfferFailure(submitWishError));
            });
    };
};

const clearSubmitWishOfferDataOperation = () => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        dispatch(submitWishOfferClear());
    };
};

export default {
    submitWishOperation,
    submitWishOfferOperation,
    clearSubmitWishOfferDataOperation,
    acceptOfferOperation
};
