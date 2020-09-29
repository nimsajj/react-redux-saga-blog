import { combineReducers } from "redux";
import authReducer from "../features/auth/redux/reducer";
import postsReducer from "../features/posts/redux/reducer";
import usersReducer from "../features/users/redux/reducer";

export default combineReducers({
  currentUser: authReducer,
  posts: postsReducer,
  users: usersReducer,
});
