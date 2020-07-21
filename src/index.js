import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rootReducer = combineReducers({});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
