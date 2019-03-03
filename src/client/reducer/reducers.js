import {
  combineReducers
} from "redux";

import {
  sessions
} from "./stores/session-store";

import {
  records
} from "./stores/records-store";

import {
  registerNewUser
} from "./stores/registration-store";

export const reducers = combineReducers({
  sessions,
  records,
  registerNewUser
});