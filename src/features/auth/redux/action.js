export const FETCH_USER_LOGIN_REQUEST = "FETCH_USER_LOGIN_REQUEST";
export const FETCH_USER_LOGIN_SUCCESS = "FETCH_USER_LOGIN_SUCCESS";
export const FETCH_USER_LOGIN_ERROR = "FETCH_USER_LOGIN_ERROR";

export const REQUEST_STATUS = {
  initial: "initial",
  loading: "loading",
  succeeded: "succeeded",
  error: "error",
};

export const fetchUserLoginRequest = (user) => ({
  type: FETCH_USER_LOGIN_REQUEST,
  payload: user,
});

export const fetchUserLoginSuccess = (user) => ({
  type: FETCH_USER_LOGIN_SUCCESS,
  payload: user,
});

export const fetchUserLogineError = (error) => ({
  type: FETCH_USER_LOGIN_ERROR,
  error,
});
