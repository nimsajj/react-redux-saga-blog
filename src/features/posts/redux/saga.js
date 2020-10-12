import { call, put, takeEvery } from "redux-saga/effects";
import { normalize } from "normalizr";
import { postsApi } from "../../../api/endpoints";
import { postsShema, postSchema } from "../../../api/schema";
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
    const { data } = yield call(postsApi.getAll, action.payload);

    yield put({
      type: FETCH_POSTS_SUCCESS,
      payload: normalize(data, postsShema),
    });
  } catch (error) {
    yield put({
      type: FETCH_POSTS_ERROR,
      payload: error.message,
    });
  }
}

function* addPost(action) {
  try {
    const { data } = yield call(postsApi.post, action.payload);

    yield put({ type: ADD_POST_SUCCESS, payload: normalize(data, postSchema) });
  } catch (error) {
    yield put({ type: ADD_POST_ERROR, payload: error.message });
  }
}

function* editPost(action) {
  try {
    const { data } = yield call(postsApi.put, action.payload);

    console.log("edit post : ", normalize(data, postSchema));
    yield put({
      type: EDIT_POST_SUCCESS,
      payload: normalize(data, postSchema),
    });
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
