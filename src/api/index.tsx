import axios from "axios";
import API from "./config";

axios.defaults.baseURL = API.BASE_URL;
axios.defaults.withCredentials = true;

const authorizationClient = axios.create({
  baseURL: API.BASE_URL,
  withCredentials: true,
});

authorizationClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    switch (error.response.data.code) {
      // 액세스 토큰 만료
      case 401: {
        return axios
          .post(API.REISSUE)
          .then(() => {
            return authorizationClient.request(error.config);
          })
          .catch(() => {});
      }
      case 400:
        break;
      // 접근 권한 없음(ex. ADMIN페이지에 USER가 접근)
      case 403:
        break;
      default:
        break;
    }
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
