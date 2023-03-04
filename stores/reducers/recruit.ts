/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import postRecruit from "../../src/api/recruit";

type RecruitState = {
  postRecruitLoading: boolean;
  postRecruitDone: boolean;
  postRecruitError: any;
  post: object;
};

// 기본 state
export const initialState: RecruitState = {
  postRecruitLoading: false,
  postRecruitDone: false,
  postRecruitError: null,
  post: {},
};

const recruitSlice = createSlice({
  name: "recruit",
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      // 받은 메시지들 가져오기
      .addCase(postRecruit.pending, state => {
        state.postRecruitLoading = true;
        state.postRecruitDone = false;
        state.postRecruitError = null;
      })
      .addCase(postRecruit.fulfilled, (state, action) => {
        state.postRecruitLoading = false;
        state.postRecruitDone = true;
        state.post = action.payload;
      })
      .addCase(postRecruit.rejected, (state, action) => {
        state.postRecruitLoading = false;
        state.postRecruitError = action.payload;
      })

      .addDefaultCase(state => state),
});

export default recruitSlice;
