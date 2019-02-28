import { createActions } from "reduxsauce";

const { Creators} = createActions({
  cancelWishRequest: ["cancelWishRequest"],
  cancelWishSuccess: ["cancelWishResponse"],
  cancelWishFailure: ["cancelWishError"],
});

export { Creators };
