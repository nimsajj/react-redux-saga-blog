import { call, put, takeEvery } from "redux-saga/effects";
import { loginApi, registerApi } from "../../../api/endpoints";

import {
  FETCH_USER_LOGIN_REQUEST,
  FETCH_USER_LOGIN_SUCCESS,
  FETCH_USER_LOGIN_ERROR,
  POST_USER_REGISTER_REQUEST,
  POST_USER_REGISTER_SUCCESS,
  POST_USER_REGISTER_ERROR,
} from "./action";

function* fetchLogin(action) {
  try {
    const { data: token } = yield call(loginApi, action.payload);

    yield put({ type: FETCH_USER_LOGIN_SUCCESS, payload: token });
  } catch (error) {
    yield put({
      type: FETCH_USER_LOGIN_ERROR,
      payload: error.message,
    });
  }
}

function* postRegister(action) {
  try {
    const { data } = yield call(registerApi, action.payload);

    if (data) {
      yield put({ type: POST_USER_REGISTER_SUCCESS, payload: data });
    } else {
      throw new Error("Register failed");
    }
  } catch (error) {
    yield put({
      type: POST_USER_REGISTER_ERROR,
      payload: error.message,
    });
  }
}

function* authSaga() {
  yield takeEvery(FETCH_USER_LOGIN_REQUEST, fetchLogin);
  yield takeEvery(POST_USER_REGISTER_REQUEST, postRegister);
}

export default authSaga;
