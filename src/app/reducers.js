import { combineReducers } from "redux";
import authReducer from "../features/auth/redux/reducer";

export default combineReducers({ currentUser: authReducer });
