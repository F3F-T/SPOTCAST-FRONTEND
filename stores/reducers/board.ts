/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import postBoard from "../../src/api/board";

type BoardState = {
  postBoardLoading: boolean;
  postBoardDone: boolean;
  postBoardError: any;
  post: object;
};

// 기본 state
export const initialState: BoardState = {
  postBoardLoading: false,
  postBoardDone: false,
  postBoardError: null,
  post: {},
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      // 받은 메시지들 가져오기
      .addCase(postBoard.pending, state => {
        state.postBoardLoading = true;
        state.postBoardDone = false;
        state.postBoardError = null;
      })
      .addCase(postBoard.fulfilled, (state, action) => {
        state.postBoardLoading = false;
        state.postBoardDone = true;
        state.post = action.payload;
      })
      .addCase(postBoard.rejected, (state, action) => {
        state.postBoardLoading = false;
        state.postBoardError = action.payload;
      })

      .addDefaultCase(state => state),
});

export default boardSlice;
