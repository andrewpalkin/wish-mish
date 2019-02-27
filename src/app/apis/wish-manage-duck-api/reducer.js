import types from "./types";

const INITIAL_STATE = {};
const submitWishReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SUBMIT_WISH_REQUEST: {
      return {
        ...state,
        submitWishShowSpinner: true
      };
    }

    case types.SUBMIT_WISH_SUCCESS: {
      const { submitWishResponse } = action;
      return {
        ...state,
        submitWishSucced: true,
        submitWishShowSpinner: false
      };
    }

    case types.SUBMIT_WISH_FAILURE: {
      return {
        ...state,
        submitWishShowSpinner: false,
        submitWishSucced: false
      };
    }

    case types.SUBMIT_WISH_OFFER_REQUEST: {
      return {
        ...state,
        makeYourOfferShowSpinner: true,
        makeYourOfferStatus: "requested"
      };
    }

    case types.SUBMIT_WISH_OFFER_SUCCESS: {
      return {
        ...state,
        makeYourOfferShowSpinner: false,
        makeYourOfferStatus: "succed"
      };
    }

    case types.SUBMIT_WISH_OFFER_FAILURE: {
      return {
        ...state,
        makeYourOfferShowSpinner: false,
        makeYourOfferStatus: "failed"
      };
    }

    case types.SUBMIT_WISH_OFFER_CLEAR: {
      return {
        ...state,
        makeYourOfferShowSpinner: false,
        makeYourOfferStatus: null
      };
    }

    case types.ACCEPT_OFFER_REQUEST: {
      return{
        ...state
      };
    }

    case types.ACCEPT_OFFER_SUCCESS: {
      return{
        ...state
      };
    }

    case types.ACCEPT_OFFER_FAILURE: {
      return{
        ...state
      };
    }

    default:
      return state;
  }
};

export default submitWishReducer;
