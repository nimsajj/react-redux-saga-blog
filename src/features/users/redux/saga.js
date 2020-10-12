import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from "./action";
import { call, put, takeEvery } from "redux-saga/effects";
import { normalize } from "normalizr";
import { usersSchema } from "../../../api/schema";
import { usersApi } from "../../../api/endpoints";

function* fetchUsers() {
  try {
    const { data } = yield call(usersApi.getAll);

    yield put({
      type: FETCH_USERS_SUCCESS,
      payload: normalize(data, usersSchema),
    });
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
