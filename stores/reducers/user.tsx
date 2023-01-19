/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { authLogin, authLogout, authSignUp, loadMe } from "../../src/api/auth";
import { editMyInfo, loadField, loadUser } from "../../src/api/user";
=======
import {
  authLogin,
  authLogout,
  authSignUp,
  getMember,
} from "../../src/api/auth";
import editMyInfo from "../../src/api/user";
>>>>>>> c4e3365 (chore: reissue test)

type UserState = {
  IsUserLoggedIn: boolean;
  me: object; // 내 정보
  user: object;
  loginLoading: boolean; // 로그인 시도중
  loginDone: boolean;
  loginError: any;
  logoutLoading: boolean;
  logoutDone: boolean;
  logoutError: any;
  signUpLoading: boolean;
  signUpDone: boolean;
  signUpError: any;
  loadMeLoading: boolean;
  loadMeDone: boolean;
  loadMeError: any;
  loadUserLoading: boolean;
  loadUserDone: boolean;
  loadUserError: any;
  loadFieldLoading: boolean;
  loadFieldDone: boolean;
  loadFieldError: any;
  field: object;
};

// 기본 state
export const initialState: UserState = {
  IsUserLoggedIn: false,
  me: {}, // 내 정보
  user: {}, // 유저 정보
  loginLoading: false, // 로그인 시도중
  loginDone: false,
  loginError: null,
  logoutLoading: false,
  logoutDone: false,
  logoutError: null,
  signUpLoading: false, // 로그인 시도중
  signUpDone: false,
  signUpError: null,
  loadMeLoading: false,
  loadMeDone: false,
  loadMeError: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
  field: {},
  loadFieldLoading: false,
  loadFieldDone: false,
  loadFieldError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp(state, action) {
      state.me = Object.assign(state.me, action.payload);
    },
    updateMe(state, action) {
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
      // 로그아웃
      .addCase(authLogout.pending, state => {
        state.logoutLoading = true;
        state.logoutDone = false;
        state.logoutError = null;
      })
      .addCase(authLogout.fulfilled, state => {
        state.logoutLoading = false;
        state.IsUserLoggedIn = false;
        state.me = {};
        state.logoutDone = true;
      })
      .addCase(authLogout.rejected, (state, action) => {
        state.logoutLoading = false;
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
      // 내 가져오기
      .addCase(loadMe.pending, state => {
        state.loadMeLoading = true;
        state.loadMeDone = false;
        state.loadMeError = null;
      })
      .addCase(loadMe.fulfilled, (state, action) => {
        state.loadMeLoading = false;
        state.me = action.payload;
        state.loadMeDone = true;
        state.IsUserLoggedIn = true;
      })
      .addCase(loadMe.rejected, (state, action) => {
        state.loadMeLoading = false;
        state.loadMeError = action.payload;
      })
      // 유저정보 가져오기
      .addCase(loadUser.pending, state => {
        state.loadUserLoading = true;
        state.loadUserDone = false;
        state.loadUserError = null;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loadUserLoading = false;
        state.user = action.payload;
        state.loadUserDone = true;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.loadUserLoading = false;
        state.loadUserError = action.payload;
      })
      .addCase(editMyInfo.rejected, (state, action) => {
        state.loadMeError = action.payload;
      })
      // 유저정보 가져오기
      .addCase(loadField.pending, state => {
        state.loadFieldLoading = true;
        state.loadFieldDone = false;
        state.loadFieldError = null;
      })
      .addCase(loadField.fulfilled, (state, action) => {
        state.loadFieldLoading = false;
        state.field = action.payload;
        state.loadFieldDone = true;
      })
      .addCase(loadField.rejected, (state, action) => {
        state.loadFieldLoading = false;
        state.loadFieldError = action.payload;
      })
<<<<<<< HEAD
=======
      .addCase(editMyInfo.rejected, (state, action) => {
        state.getMeError = action.payload;
      })

>>>>>>> c4e3365 (chore: reissue test)
      .addDefaultCase(state => state),
});

export const { signUp, updateMe } = userSlice.actions;

export default userSlice;
