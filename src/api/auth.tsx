import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toastMsg from "../components/common/Toast";
import { authorizationClient, unAuthorizationClient } from ".";
import API from "./config";

axios.defaults.baseURL = API.BASE_URL;
axios.defaults.withCredentials = true;

// 리프레쉬 토큰으로 액세스토큰 재요청
const refreshAuth = () => {
  return axios.post(API.REISSUE);
};

// 액세스 토큰 있음 && 유효함
const loadMe = createAsyncThunk(
  "user/loadMe",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API.MYINFO);
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || null);
    }
  },
);

const authLogin = createAsyncThunk(
  "user/authLogin",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await unAuthorizationClient.post(API.LOGIN, data);
      toastMsg("로그인 성공", true);
      return response.data.data;
    } catch (error: any) {
      toastMsg(error.response.data.message, false);
      return rejectWithValue(error.response.data);
    }
  },
);

const authLogout = createAsyncThunk("user/authLogout", async () => {
  try {
    const response = await authorizationClient.post(API.LOGOUT);
    toastMsg("로그아웃 성공", true);
    return response.data.data;
  } catch (error: any) {
    toastMsg(error.response.data.message, false);
    return error.response.data;
  }
});

const authEmailSend = (email: string) => {
  return unAuthorizationClient.post(`${API.EMAIL_SEND}`, {
    email,
  });
};

const authEmailConfirms = (email: string, authNumber: string) => {
  return unAuthorizationClient.post(`${API.EMAIL_CONFIRM}`, {
    email,
    certificationNumber: authNumber,
  });
};

const authSignUp = createAsyncThunk(
  "user/authSignUp",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await unAuthorizationClient.post(API.SIGNUP, data);
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export {
  loadMe,
  authLogin,
  authLogout,
  authEmailSend,
  authEmailConfirms,
  authSignUp,
  refreshAuth,
};
