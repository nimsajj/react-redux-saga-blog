import httpClient from "./httpClient";

// Auth endpoints
export const loginApi = (params) => httpClient.post("login", params);
export const registerApi = (params) => httpClient.post("register", params);

// Posts endpoints
export const postsApi = {
  getAll: () => httpClient.get("articles"),
  post: (data) => httpClient.post("articles", data),
  put: (data) => httpClient.put(`articles/${data.postId}`, data),
};

// Users endpoints
export const usersApi = {
  getAll: () => httpClient.get("users"),
};
