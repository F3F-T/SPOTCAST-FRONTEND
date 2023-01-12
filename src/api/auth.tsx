import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorizationClient, unAuthorizationClient } from ".";
import API from "./config";

const getMember = createAsyncThunk("user/getMember", async () => {
  const response = await authorizationClient.get(API.MYINFO);
  return response.data.data;
});

const getSocialMember = createAsyncThunk("user/getMember", async () => {
  const response = await authorizationClient.get(API.SOCIAL_MYINFO);
  return response.data.data;
});

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
  getSocialMember,
  authLogin,
  authLogout,
  authEmailSend,
  authEmailConfirms,
  authSignUp,
};
