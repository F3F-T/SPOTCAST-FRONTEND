/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { authLogin, authSignUp, getMember } from "../../src/api/auth";

// 기본 state
export const initialState = {
  IsUserLoggedIn: false,
  me: null, // 내 정보
  loginLoading: false, // 로그인 시도중
  loginDone: false,
  loginError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser(state, action) {
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
      .addDefaultCase(state => state),
});

export const { loadUser } = userSlice.actions;

export default userSlice;
