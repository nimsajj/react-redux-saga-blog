import { all } from "redux-saga/effects";

import authSaga from "../features/auth/redux/saga";
import postsSaga from "../features/posts/redux/saga";
import usersSaga from "../features/users/redux/saga";

export default function* rootSaga() {
  // https://redux-saga.js.org/docs/advanced/RootSaga.html
  yield all([authSaga(), postsSaga(), usersSaga()]);
}
