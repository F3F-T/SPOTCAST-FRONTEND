/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { authLogin, getMember } from "../../src/api/auth";

type UserState = {
  IsUserLoggedIn: boolean;
  me: null; // 내 정보
  loginLoading: boolean; // 로그인 시도중
  loginDone: boolean;
  loginError: any;
  getMeLoading: boolean;
  getMeDone: boolean;
  getMeError: any;
};

// 기본 state
export const initialState: UserState = {
  IsUserLoggedIn: false,
  me: null, // 내 정보
  loginLoading: false, // 로그인 시도중
  loginDone: false,
  loginError: null,
  getMeLoading: false,
  getMeDone: false,
  getMeError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginTest(state, action) {
      state.IsUserLoggedIn = true;
      state.me = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      // login
      .addCase(authLogin.pending, state => {
        state.loginLoading = true;
        state.loginDone = false;
        state.loginError = null;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.me = action.payload;
        state.loginDone = true;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loginLoading = false;
        state.loginError = action.payload;
      })
      // getMember
      .addCase(getMember.pending, state => {
        state.getMeLoading = true;
        state.getMeDone = false;
        state.getMeError = null;
      })
      .addCase(getMember.fulfilled, (state, action) => {
        state.getMeLoading = false;
        state.me = action.payload;
        state.getMeDone = true;
      })
      .addCase(getMember.rejected, (state, action) => {
        state.getMeLoading = false;
        state.getMeError = action.payload;
      })
      .addDefaultCase(state => state),
});

export const { loginTest } = userSlice.actions;

export default userSlice;
