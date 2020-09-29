import { call, put, takeEvery } from "redux-saga/effects";
import { postsApi, normalize } from "../../../api/endpoints";

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
} from "./action";

function* fetchPosts(action) {
  try {
    const {
      data: { posts },
    } = yield call(postsApi, action.payload);

    yield put({ type: FETCH_POSTS_SUCCESS, payload: normalize(posts) });
  } catch (error) {
    yield put({
      type: FETCH_POSTS_ERROR,
      payload: error.message,
    });
  }
}

function* postsSaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
}

export default postsSaga;
