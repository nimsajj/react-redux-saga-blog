import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  ADD_POST_SUCCESS,
  ADD_POST_ERROR,
  EDIT_POST_SUCCESS,
  EDIT_POST_ERROR,
} from "./action";
import { REQUEST_STATUS } from "../../../common/status";

const initialState = {
  status: REQUEST_STATUS.initial,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, ...action.payload, status: REQUEST_STATUS.loading };
    case FETCH_POSTS_SUCCESS:
      return { ...state, ...action.payload, status: REQUEST_STATUS.succeeded };
    case FETCH_POSTS_ERROR:
      return { ...state, error: action.payload, status: REQUEST_STATUS.error };
    case ADD_POST_SUCCESS:
      const post = action.payload;
      return {
        ...state,
        entities: { ...state.entities, [post.id]: post },
        ids: [...state.ids, post.id],
        status: REQUEST_STATUS.succeeded,
      };
    case ADD_POST_ERROR:
      return { ...state, error: action.payload, status: REQUEST_STATUS.error };
    case EDIT_POST_SUCCESS:
      const editPost = action.payload;

      return {
        ...state,
        entities: { ...state.entities, [editPost.id]: editPost },
        status: REQUEST_STATUS.succeeded,
      };
    case EDIT_POST_ERROR:
      return { ...state, error: action.payload, status: REQUEST_STATUS.error };
    default:
      return state;
  }
};
