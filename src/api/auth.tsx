import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorizationClient, unAuthorizationClient } from ".";
import API from "./config";

const authLogin = createAsyncThunk(
  "user/login",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await unAuthorizationClient.post(API.LOGIN, data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

const authSignUp = (email: string, password: string) => {
  return unAuthorizationClient
    .post(API.SIGNUP, { email, password })
    .then(res => res.data);
};

const getMember = () => {
  return authorizationClient.get(API.ME).then(res => res.data);
};

export { authLogin, authSignUp, getMember };
