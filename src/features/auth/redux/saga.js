import { call, put, takeEvery } from "redux-saga/effects";
import { loginApi } from "../../../api/endpoints/userApi";

import {
  FETCH_USER_LOGIN_REQUEST,
  FETCH_USER_LOGIN_SUCCESS,
  FETCH_USER_LOGIN_ERROR,
} from "./action";

function* fetchLogin(action) {
  try {
    const {
      data: { user },
    } = yield call(loginApi, action.payload);
    if (user) {
      yield put({ type: FETCH_USER_LOGIN_SUCCESS, payload: user });
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    yield put({
      type: FETCH_USER_LOGIN_ERROR,
      payload: error.message,
    });
  }
}

function* authSaga() {
  yield takeEvery(FETCH_USER_LOGIN_REQUEST, fetchLogin);
}

export default authSaga;
