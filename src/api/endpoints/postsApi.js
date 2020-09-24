import axios from "axios";

export const normalize = (response) => {
  let data = { entities: {}, ids: [] };

  response.forEach((res) => {
    data.entities[res.id] = res;
    data.ids.push(res.id);
  });

  return data;
};

export const postsApi = () => axios.get("api/posts");
