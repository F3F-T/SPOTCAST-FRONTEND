const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
// const API_VER = ""; => API 미정이라 주석
const ME = "/member/"; // 접속한 유저
const AUTH = "/auth/";
const LOGIN = "/auth/login/";
const SIGNUP = "/auth/signup/";
// const GOOGLE = "/auth/google/"; => API 미정이라 주석
// const KAKAO = "/auth/kakao/"; => API 미정이라 주석
const USER = "/user/"; // 다른 유저
const BOARD = "/board/";
const PORTFFOLIO = "/portfolio/";

const API = {
  BASE_URL: `${BASE_URL}`,
  ME: `${ME}`,
  AUTH: `${AUTH}`,
  LOGIN: `${LOGIN}`,
  SIGNUP: `${SIGNUP}`,
  USER: `${USER}`,
  BOARD: `${BOARD}`,
  PORTFOLIO: `${PORTFFOLIO}`,
};

export default API;
