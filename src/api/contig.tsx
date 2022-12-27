const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
// const API_VER = ""; => API 미정이라 주석
const ME = "/member/"; // 접속한 유저
const AUTH = "/auth/";
// const GOOGLE = "/auth/google/"; => API 미정이라 주석
// const KAKAO = "/auth/kakao/"; => API 미정이라 주석
const USER = "/user/"; // 다른 유저
const BOARD = "/board/";
const PORTFFOLIO = "/portfolio/";

const API = {
  ME: `${BASE_URL}${ME}`,
  AUTH: `${BASE_URL}${AUTH}`,
  USER: `${BASE_URL}${USER}`,
  BOARD: `${BASE_URL}${BOARD}`,
  PORTFOLIO: `${BASE_URL}${PORTFFOLIO}`,
};

export default API;
