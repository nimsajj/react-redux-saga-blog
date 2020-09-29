import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from "./action";

import { call, put, takeEvery } from "redux-saga/effects";
import { usersApi, normalize } from "../../../api/endpoints";

function* fetchUsers() {
  try {
    const {
      data: { users },
    } = yield call(usersApi.getAll);

    yield put({ type: FETCH_USERS_SUCCESS, payload: normalize(users) });
  } catch (error) {
    yield put({
      type: FETCH_USERS_ERROR,
      error: error.message,
    });
  }
}

function* usersSaga() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);
}

export default usersSaga;
