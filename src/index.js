import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
