import { call, put, takeEvery } from "redux-saga/effects";
import { postsApi, normalize } from "../../../api/endpoints";

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_ERROR,
  EDIT_POST_ERROR,
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
} from "./action";

function* fetchPosts(action) {
  try {
    const {
      data: { posts },
    } = yield call(postsApi.getAll, action.payload);

    yield put({ type: FETCH_POSTS_SUCCESS, payload: normalize(posts) });
  } catch (error) {
    yield put({
      type: FETCH_POSTS_ERROR,
      payload: error.message,
    });
  }
}

function* addPost(action) {
  try {
    const {
      data: { post },
    } = yield call(postsApi.post, action.payload);

    yield put({ type: ADD_POST_SUCCESS, payload: post });
  } catch (error) {
    yield put({ type: ADD_POST_ERROR, payload: error.message });
  }
}

function* editPost(action) {
  try {
    const {
      data: { post },
    } = yield call(postsApi.put, action.payload);

    console.log("post: ", action.payload);

    yield put({ type: EDIT_POST_SUCCESS, payload: post });
  } catch (error) {
    yield put({ type: EDIT_POST_ERROR, payload: error.message });
  }
}

function* postsSaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
  yield takeEvery(ADD_POST_REQUEST, addPost);
  yield takeEvery(EDIT_POST_REQUEST, editPost);
}

export default postsSaga;
