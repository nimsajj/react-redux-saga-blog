import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from "./action";
import { REQUEST_STATUS } from "../../../common/status";

const initialState = {
  status: REQUEST_STATUS.initial,
  error: null,
  entities: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, ...action.payload, status: REQUEST_STATUS.loading };
    case FETCH_USERS_SUCCESS:
      return { ...state, ...action.payload, status: REQUEST_STATUS.succeeded };
    case FETCH_USERS_ERROR:
      return { ...state, error: action.payload, status: REQUEST_STATUS.error };
    default:
      return state;
  }
};
