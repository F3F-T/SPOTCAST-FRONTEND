import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authorizationClient, unAuthorizationClient } from ".";
import API from "./config";

axios.defaults.baseURL = API.BASE_URL;
axios.defaults.withCredentials = true;

// 액세스 토큰 있는지 우선 API.MYINFO로 확인 리턴값이 err.code === 401이면
const updateAuth = () => {
  return axios.get(API.MYINFO);
};

// 리프레쉬 토큰으로 액세스토큰 재요청
const refreshAuth = () => {
  return axios.post(API.REISSUE);
};

// 액세스 토큰 있음 && 유효함
const getMember = createAsyncThunk(
  "user/getMember",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API.MYINFO);
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data);
    }
  },
);

const authLogin = createAsyncThunk(
  "user/authLogin",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await unAuthorizationClient.post(API.LOGIN, data);
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

const authLogout = createAsyncThunk("user/authLogout", async () => {
  try {
    const response = await authorizationClient.post(API.LOGOUT);
    return response.data.data;
  } catch (error: any) {
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
  getMember,
  authLogin,
  authLogout,
  authEmailSend,
  authEmailConfirms,
  authSignUp,
  updateAuth,
  refreshAuth,
};
