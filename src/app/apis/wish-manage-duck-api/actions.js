import { createActions } from "reduxsauce";

const { Creators, Types } = createActions({
  submitWishRequest: ["submitWishData"],
  submitWishSuccess: ["submitWishResponse"],
  submitWishFailure: ["submitWishError"]
});

export { Creators, Types };
