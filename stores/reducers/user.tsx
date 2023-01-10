/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { authLogin, authSignUp, getMember } from "../../src/api/auth";

type UserState = {
  IsUserLoggedIn: boolean;
  me: object; // 내 정보
  loginLoading: boolean; // 로그인 시도중
  loginDone: boolean;
  loginError: any;
  signUpLoading: boolean; // 로그인 시도중
  signUpDone: boolean;
  signUpError: any;
  getMeLoading: boolean;
  getMeDone: boolean;
  getMeError: any;
};

// 기본 state
export const initialState: UserState = {
  IsUserLoggedIn: false,
  me: {}, // 내 정보
  loginLoading: false, // 로그인 시도중
  loginDone: false,
  loginError: null,
  signUpLoading: false, // 로그인 시도중
  signUpDone: false,
  signUpError: null,
  getMeLoading: false,
  getMeDone: false,
  getMeError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginTest(state) {
      state.IsUserLoggedIn = true;
    },
    signUp(state, action) {
      state.me = Object.assign(state.me, action.payload);
    },
  },
  extraReducers: builder =>
    builder
      // 로그인
      .addCase(authLogin.pending, state => {
        state.loginLoading = true;
        state.loginDone = false;
        state.loginError = null;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.IsUserLoggedIn = true;
        state.me = action.payload;
        state.loginDone = true;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loginLoading = false;
        state.loginError = action.payload;
      })
      // 회원가입
      .addCase(authSignUp.pending, state => {
        state.signUpLoading = true;
        state.signUpDone = false;
        state.signUpError = null;
      })
      .addCase(authSignUp.fulfilled, state => {
        state.signUpLoading = false;
        state.signUpDone = true;
      })
      .addCase(authSignUp.rejected, (state, action) => {
        state.signUpLoading = false;
        state.signUpError = action.payload;
      })
      // 유저정보 가져오기
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

export const { loginTest, signUp } = userSlice.actions;

export default userSlice;
