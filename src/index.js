import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from "redux-logger";
import "tachyons";

import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { requestRobots, searchRobots } from './reducers'

const logger = createLogger();

const rootReducers = combineReducers({ requestRobots, searchRobots });

const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
