import axios from "axios";
import { getJwt } from "../common/storage";

const AUTH_TOKEN = getJwt();

const config = {
  baseURL: "http://localhost:8000/api/",
  responseType: "json",
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
    Accept: "application/json",
  },
};

const httpClient = axios.create(config);

export default httpClient;
