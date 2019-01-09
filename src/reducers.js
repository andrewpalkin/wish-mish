import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import submitWishReducer from "./app/submit-wish-page/duck";

const rootReducer = combineReducers({
  form: formReducer,
  submitWish: submitWishReducer
});

export default rootReducer;
