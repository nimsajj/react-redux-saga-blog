import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  ADD_POST_SUCCESS,
  ADD_POST_ERROR,
  EDIT_POST_SUCCESS,
  EDIT_POST_ERROR,
  FETCH_SINGLE_POST_SUCCESS,
  FETCH_SINGLE_POST_ERROR,
} from "./action";
import { REQUEST_STATUS } from "../../../common/status";

const initialState = {
  status: REQUEST_STATUS.initial,
  error: null,
  entities: {},
  ids: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        status: REQUEST_STATUS.loading,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        entities: action.payload.entities.articles,
        ids: action.payload.result,
        status: REQUEST_STATUS.succeeded,
      };
    case FETCH_POSTS_ERROR:
      return { ...state, error: action.payload, status: REQUEST_STATUS.error };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        entities: { ...state.entities, ...action.payload.entities.articles },
        ids: [...state.ids, action.payload.result],
        status: REQUEST_STATUS.succeeded,
      };
    case ADD_POST_ERROR:
      return { ...state, error: action.payload, status: REQUEST_STATUS.error };
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        entities: { ...state.entities, ...action.payload.entities.articles },
        status: REQUEST_STATUS.succeeded,
      };
    case EDIT_POST_ERROR:
      return { ...state, error: action.payload, status: REQUEST_STATUS.error };
    case FETCH_SINGLE_POST_SUCCESS:
      return {
        ...state,
        entities: { ...state.entities, ...action.payload.entities.articles },
        status: REQUEST_STATUS.initial,
      };
    case FETCH_SINGLE_POST_ERROR:
      return { ...state, error: action.payload, status: REQUEST_STATUS.error };

    default:
      return state;
  }
};
