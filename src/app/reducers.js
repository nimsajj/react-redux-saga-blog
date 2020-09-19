import { combineReducers } from "redux";

const initialState = "Hello";

const helloReducer = (state = initialState, action) => {
  return state;
};

export default combineReducers({ hello: helloReducer });
