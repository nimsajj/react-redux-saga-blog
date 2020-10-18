export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

export const FETCH_SINGLE_POST_REQUEST = "FETCH_SINGLE_POST_REQUEST";
export const FETCH_SINGLE_POST_SUCCESS = "FETCH_SINGLE_POST_SUCCESS";
export const FETCH_SINGLE_POST_ERROR = "FETCH_SINGLE_POST_ERROR";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_ERROR = "ADD_POST_ERROR";

export const EDIT_POST_REQUEST = "EDIT_POST_REQUEST";
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";
export const EDIT_POST_ERROR = "EDIT_POST_ERROR";

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchSinglePostRequest = (id) => ({
  type: FETCH_SINGLE_POST_REQUEST,
  payload: id,
});

export const addPostRequest = (post) => ({
  type: ADD_POST_REQUEST,
  payload: post,
});

export const editPostRequest = (post) => ({
  type: EDIT_POST_REQUEST,
  payload: post,
});
