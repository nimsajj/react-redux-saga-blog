import axios from "axios";

export const loginApi = (params) => axios.post("api/users/login", params);
