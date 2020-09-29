import axios from "axios";

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
export const loginApi = (params) => axios.post("api/users/login", params);
export const registerApi = (params) =>
  axios.post("api/users", { user: params });

// Posts endpoints
export const postsApi = {
  getAll: () => axios.get("api/posts"),
  post: (data) => axios.post("/api/posts", { post: data }),
  put: (data) => axios.put("/api/posts/" + data.postId, { post: data }),
};

// Users endpoints
//export const usersApi = () => axios.get("api/users");
export const usersApi = {
  getAll: () => axios.get("api/users"),
};
