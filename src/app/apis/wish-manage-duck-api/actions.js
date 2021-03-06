import { createActions } from "reduxsauce";

const { Creators, Types } = createActions({
  submitWishRequest: ["submitWishData"],
  submitWishSuccess: ["submitWishResponse"],
  submitWishFailure: ["submitWishError"],

  submitWishOfferRequest: ["submitWishOfferData"],
  submitWishOfferSuccess: ["submitWishOfferResponse"],
  submitWishOfferFailure: ["submitWishOfferError"],
  submitWishOfferClear: ["submitWishOfferClear"],

  acceptOfferRequest: ["acceptOfferRequestData"],
  acceptOfferSuccess: ["acceptOfferResponse"],
  acceptOfferFailure: ["acceptOfferError"]

});

export { Creators, Types };
