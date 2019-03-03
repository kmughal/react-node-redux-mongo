import {
  take,
  put,
  select
} from "redux-saga/effects";
import axios from "axios";
import * as actions from ".";


const baseUrl = process.env.SERVER_URI || "http://localhost:3000";
export function* authenticateUserSaga() {
  while (true) {
    const {
      username,
      password
    } = yield take(actions.AUTHENTICATE_USER);

    const url = `${baseUrl}/checkLogin`;

    const {
      data
    } = yield axios.post(url, {
      username,
      password
    });

    if (!data || !(data.status)) {
      put(actions.unknownError());
      return;
    }

    if (data.status === 200)
      yield put(actions.userIsAuthorized(data.id, data.name, data.tasks));
    else if (data.status === 500) {
      yield put(actions.userIsNotAuthorized());
    }
  }
}

export function* addNewTaskSaga() {
  while (true) {
    const {
      id,
      task
    } = yield take(actions.ADD_NEW_TASK);

    const url = `${baseUrl}/records/addTask`
    const {
      data
    } = yield axios.post(url, {
      id,
      task
    });

    yield put(actions.newTaskCreated(id, data.name, data.tasks));

  }
}

export function* registerNewUserSaga() {
  while (true) {
    const {
      name,
      password
    } = yield take(actions.REGISTER_NEW_USER);
    const url = `${baseUrl}/checkLogin/register`;
    const result = yield axios.post(url, {
      name,
      password
    });

    if (result.status && result.status === 200) {
      yield put(actions.newUserRegistered(name,password));
    } else if (result.status && result.status === 500) {
      yield put(actions.requestToRegisterNewUserDeclined());
    }
  }
}