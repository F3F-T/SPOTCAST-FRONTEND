import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authorizationClient, unAuthorizationClient } from ".";
import API from "./config";

// const Login = (email: string, password: string) => {
//   return unAuthorizationClient
//     .post(API.LOGIN, { email, password })
//     .then(res => res.data);
// };

// const authLogin = createAsyncThunk(
//   "user/login",
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await unAuthorizationClient.post(API.LOGIN, data);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   },
// );

const authLogin = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/user/login", data);
      return response.data;
    } catch (error) {
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
