import axios from "axios";

export const loginApi = (params) => axios.post("api/users/login", params);
export const registerApi = (params) =>
  axios.post("api/users", { user: params });
