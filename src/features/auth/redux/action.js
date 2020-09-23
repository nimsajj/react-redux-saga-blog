export const FETCH_USER_LOGIN_REQUEST = "FETCH_USER_LOGIN_REQUEST";
export const FETCH_USER_LOGIN_SUCCESS = "FETCH_USER_LOGIN_SUCCESS";
export const FETCH_USER_LOGIN_ERROR = "FETCH_USER_LOGIN_ERROR";
export const USER_LOGOUT = "USER_LOGOUT";
export const POST_USER_REGISTER_REQUEST = "POST_USER_REGISTER_REQUEST";
export const POST_USER_REGISTER_SUCCESS = "POST_USER_REGISTER_SUCCESS";
export const POST_USER_REGISTER_ERROR = "POST_USER_REGISTER_ERROR";

export const REQUEST_STATUS = {
  initial: "initial",
  loading: "loading",
  succeeded: "succeeded",
  creates: "creates",
  error: "error",
};

export const fetchUserLoginRequest = (user) => ({
  type: FETCH_USER_LOGIN_REQUEST,
  payload: user,
});

export const postUserRegisterRequest = (user) => ({
  type: POST_USER_REGISTER_REQUEST,
  payload: user,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});
