/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { loadMsgReceived, loadMsgSend } from "../../src/api/message";

type MessageState = {
  msgReceived: object[];
  msgSend: object[];
  loadMsgLoding: boolean;
  loadMsgDone: boolean;
  loadMsgError: any;
};

// 기본 state
export const initialState: MessageState = {
  msgReceived: [],
  msgSend: [],
  loadMsgLoding: false,
  loadMsgDone: false,
  loadMsgError: null,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      // 받은 메시지들 가져오기
      .addCase(loadMsgReceived.pending, state => {
        state.loadMsgLoding = true;
        state.loadMsgDone = false;
        state.loadMsgError = null;
      })
      .addCase(loadMsgReceived.fulfilled, (state, action) => {
        state.loadMsgLoding = false;
        state.msgReceived = action.payload;
        state.loadMsgDone = true;
      })
      .addCase(loadMsgReceived.rejected, (state, action) => {
        state.loadMsgLoding = false;
        state.loadMsgError = action.payload;
      })
      // 보낸 메시지들 가져오기
      .addCase(loadMsgSend.pending, state => {
        state.loadMsgLoding = true;
        state.loadMsgDone = false;
        state.loadMsgError = null;
      })
      .addCase(loadMsgSend.fulfilled, (state, action) => {
        state.loadMsgLoding = false;
        state.msgSend = action.payload;
        state.loadMsgDone = true;
      })
      .addCase(loadMsgSend.rejected, (state, action) => {
        state.loadMsgLoding = false;
        state.loadMsgError = action.payload;
      })

      .addDefaultCase(state => state),
});

export default messageSlice;
