import axios from "axios";
import API from "./config";

const authorizationClient = axios.create({
  baseURL: API.BASE_URL,
  withCredentials: true,
});

// 요청 전 헤더 추가
authorizationClient.interceptors.request.use(config => {
  return Object.assign(config, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
});

authorizationClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error("[Axios]", error);
    return Promise.reject(error);
  },
);

const unAuthorizationClient = axios.create({
  baseURL: API.BASE_URL,
  withCredentials: true,
});

unAuthorizationClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error("[Axios]", error);
    return Promise.reject(error);
  },
);

export { authorizationClient, unAuthorizationClient };
