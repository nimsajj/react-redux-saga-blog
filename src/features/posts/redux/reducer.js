import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "./action";
import { REQUEST_STATUS } from "../../../common/status";

const initialState = {
  status: "initial",
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, ...action.payload, status: REQUEST_STATUS.loading };
    case FETCH_POSTS_SUCCESS:
      return { ...state, ...action.payload, status: REQUEST_STATUS.succeeded };
    default:
      return state;
  }
};
