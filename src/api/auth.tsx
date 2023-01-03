import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorizationClient, unAuthorizationClient } from ".";
import API from "./config";

const authLogin = createAsyncThunk(
  "user/authLogin",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await unAuthorizationClient.post(API.LOGIN, data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

const getMember = createAsyncThunk("user/getMember", async () => {
  try {
    const response = await authorizationClient.post(API.ME);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
});

const authEmail = (email: string) => {
  return unAuthorizationClient
    .post(`${API.AUTH}email-certification/sends`, { email })
    .then(res => res.data);
};

const authSignUp = createAsyncThunk(
  "user/authSignUp",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await unAuthorizationClient.post(API.SIGNUP, data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export { authLogin, authEmail, authSignUp, getMember };
