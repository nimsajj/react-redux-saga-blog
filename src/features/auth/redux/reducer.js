import {
  FETCH_USER_LOGIN_SUCCESS,
  FETCH_USER_LOGIN_ERROR,
  USER_LOGOUT,
  REQUEST_STATUS,
  POST_USER_REGISTER_SUCCESS,
  POST_USER_REGISTER_ERROR,
} from "./action";

const initialState = {
  status: "initial",
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN_SUCCESS:
      return { ...state, ...action.payload, status: REQUEST_STATUS.succeeded };
    case FETCH_USER_LOGIN_ERROR:
      return { ...state, error: action.payload, status: REQUEST_STATUS.error };
    case POST_USER_REGISTER_SUCCESS:
      return { ...state, ...action.payload, status: REQUEST_STATUS.creates };
    case POST_USER_REGISTER_ERROR:
      return {
        ...state,
        error: action.payload,
        status: REQUEST_STATUS.error,
      };
    case USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
};
