const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
// const API_VER = ""; => API 미정이라 주석
const ME = "/member/"; // 접속한 유저
const AUTH = "/auth/";
const USER = "/user/"; // 다른 유저
const BOARD = "/board/";
const PORTFFOLIO = "/portfolio/";
const LOGIN = "login";
const LOGOUT = "logout";
const SIGNUP = "signup";
const EMAIL_CERTIFICATION_SEND = "email-certification/sends";
const EMAIL_CERTIFICATION_CONFIRM = "email-certification/confirms";
// const GOOGLE = "/auth/google/"; => API 미정이라 주석
// const KAKAO = "/auth/kakao/"; => API 미정이라 주석

const API = {
  BASE_URL: `${BASE_URL}`,
  AUTH: `${AUTH}`,
  LOGIN: `${AUTH}${LOGIN}`,
  LOGOUT: `${AUTH}${LOGOUT}`,
  EMAIL_SEND: `${AUTH}${EMAIL_CERTIFICATION_SEND}`,
  EMAIL_CONFIRM: `${AUTH}${EMAIL_CERTIFICATION_CONFIRM}`,
  SIGNUP: `${AUTH}${SIGNUP}`,
  ME: `${ME}`,
  USER: `${USER}`,
  BOARD: `${BOARD}`,
  PORTFOLIO: `${PORTFFOLIO}`,
};

export default API;
