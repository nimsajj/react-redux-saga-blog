import { combineReducers } from "redux";
import authReducer from "../features/auth/redux/reducer";
import postsReducer from "../features/posts/redux/reducer";

export default combineReducers({
  currentUser: authReducer,
  posts: postsReducer,
});
