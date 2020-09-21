import {
  FETCH_USER_LOGIN_REQUEST,
  FETCH_USER_LOGIN_SUCCESS,
  FETCH_USER_LOGIN_ERROR,
  REQUEST_STATUS,
} from "./action";

const initialState = {
  status: "initial",
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN_REQUEST:
      return { ...state, status: REQUEST_STATUS.loading };
    case FETCH_USER_LOGIN_SUCCESS:
      return { ...state, ...action.payload, status: REQUEST_STATUS.succeeded };
    case FETCH_USER_LOGIN_ERROR:
      return { ...state, error: action.payload, status: REQUEST_STATUS.error };
    default:
      return state;
  }
};
