import axios from "axios";
import httpClient from "./httpClient";

// Normalize response data
export const normalize = (response) => {
  let data = { entities: {}, ids: [] };

  response.forEach((res) => {
    data.entities[res.id] = res;
    data.ids.push(res.id);
  });

  return data;
};

// Auth endpoints
export const loginApi = (params) => httpClient.post("login", params);
export const registerApi = (params) => httpClient.post("users", params);

// Posts endpoints
export const postsApi = {
  getAll: () => axios.get("api/posts"),
  post: (data) => axios.post("/api/posts", { post: data }),
  put: (data) => axios.put("/api/posts/" + data.postId, { post: data }),
};

// Users endpoints
export const usersApi = {
  getAll: () => httpClient.get("users"),
};
