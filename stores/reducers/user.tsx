/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
// import { authLogin, authSignUp, getMember } from "../../src/api/auth";

// 기본 state
export const initialState = {
  IsUserLoggedIn: false,
  me: null, // 내 정보
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
  extraReducers: builder => builder,
});

export const { loadUser } = userSlice.actions;

export default userSlice;
