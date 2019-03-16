import {
  createStore,
  applyMiddleware
} from "redux";

import {
  createLogger
} from "redux-logger";

import createSagaMiddleware from "redux-saga";
import * as sagas from "../actions/sagas";

import {
  getState,
  saveState
} from "./local-storage";

import {
  reducers
} from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const presistedState = getState();

export const store = presistedState !== null ? createStore(reducers, presistedState,
  applyMiddleware(createLogger(), sagaMiddleware)) : createStore(reducers,
  applyMiddleware(createLogger(), sagaMiddleware));

store.subscribe(() => {
  saveState(store.getState());
})

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}