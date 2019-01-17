import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import submitWishReducer from "./app/apis/wish-manage-duck-api";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  form: formReducer,
  submitWish: submitWishReducer,
  firestore: firestoreReducer
});

export default rootReducer;
