const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
// const API_VER = ""; => API 미정이라 주석
const MEMBER = "/member/";
const AUTH = "/auth/";
const USER = "/user/"; // 다른 유저
const BOARD = "/board/";
const PORTFFOLIO = "/portfolio/";
const MESSAGE = "/message/";
const BOOKMARK = "bookmark";
const MYINFO = "myInfo";
const REISSUE = "reissue";
const LOGIN = "login";
const LOGOUT = "logout";
const SIGNUP = "signup";
const EMAIL_CERTIFICATION_SEND = "email-certification/sends";
const EMAIL_CERTIFICATION_CONFIRM = "email-certification/confirms";

const API = {
  BASE_URL: `${BASE_URL}`,
  AUTH: `${AUTH}`,
  LOGIN: `${AUTH}${LOGIN}`,
  LOGOUT: `${AUTH}${LOGOUT}`,
  EMAIL_SEND: `${AUTH}${EMAIL_CERTIFICATION_SEND}`,
  EMAIL_CONFIRM: `${AUTH}${EMAIL_CERTIFICATION_CONFIRM}`,
  SIGNUP: `${AUTH}${SIGNUP}`,
  MEMBER: `${MEMBER}`,
  BOOKMARK: `${MEMBER}${BOOKMARK}`,
  MYINFO: `${MEMBER}${MYINFO}`,
  REISSUE: `${AUTH}${REISSUE}`,
  USER: `${USER}`,
  BOARD: `${BOARD}`,
  PORTFOLIO: `${PORTFFOLIO}`,
  MESSAGE: `${MESSAGE}`,
  MESSAGE_SEND: `${MESSAGE}send`,
  LOAD_MSG_SEND: `${MESSAGE}sender`,
  LOAD_MSG_RECEIVE: `${MESSAGE}recipient`,
  LOAD_MSG_UNREAD: `${MESSAGE}unread`,
  LOAD_FOLLOWER: `${MEMBER}${BOOKMARK}/follower`,
  LOAD_FOLLWING: `${MEMBER}${BOOKMARK}/following`,
  LOAD_BOARD: `${BOARD}list/boardType/`,
};

export default API;
