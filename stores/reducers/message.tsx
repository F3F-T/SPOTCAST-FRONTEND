/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import {
  loadMsgReceived,
  loadMsgSend,
  sendMessage,
} from "../../src/api/message";

type MessageState = {
  msgReceived: object[];
  msgSend: object[];
  loadMsgSendLoding: boolean;
  loadMsgSendDone: boolean;
  loadMsgSendError: any;
  loadMsgReceivedLoding: boolean;
  loadMsgReceivedDone: boolean;
  loadMsgReceivedError: any;
  sendMsgLoading: boolean;
  sendMsgDone: boolean;
  sendMsgError: any;
};

// 기본 state
export const initialState: MessageState = {
  msgReceived: [],
  msgSend: [],
  loadMsgSendLoding: false,
  loadMsgSendDone: false,
  loadMsgSendError: null,
  loadMsgReceivedLoding: false,
  loadMsgReceivedDone: false,
  loadMsgReceivedError: null,
  sendMsgLoading: false,
  sendMsgDone: false,
  sendMsgError: null,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      // 받은 메시지들 가져오기
      .addCase(loadMsgReceived.pending, state => {
        state.loadMsgReceivedLoding = true;
        state.loadMsgReceivedDone = false;
        state.loadMsgReceivedError = null;
      })
      .addCase(loadMsgReceived.fulfilled, (state, action) => {
        state.loadMsgReceivedLoding = false;
        state.msgReceived = action.payload;
        state.loadMsgReceivedDone = true;
      })
      .addCase(loadMsgReceived.rejected, (state, action) => {
        state.loadMsgReceivedLoding = false;
        state.loadMsgReceivedError = action.payload;
      })
      // 보낸 메시지들 가져오기
      .addCase(loadMsgSend.pending, state => {
        state.loadMsgSendLoding = true;
        state.loadMsgSendDone = false;
        state.loadMsgSendError = null;
      })
      .addCase(loadMsgSend.fulfilled, (state, action) => {
        state.loadMsgSendLoding = false;
        state.msgSend = action.payload;
        state.loadMsgSendDone = true;
      })
      .addCase(loadMsgSend.rejected, (state, action) => {
        state.loadMsgSendLoding = false;
        state.loadMsgSendError = action.payload;
      })
      // 메시지 보내기
      .addCase(sendMessage.pending, state => {
        state.sendMsgLoading = true;
        state.sendMsgDone = false;
        state.sendMsgError = null;
      })
      .addCase(sendMessage.fulfilled, state => {
        state.sendMsgLoading = false;
        state.sendMsgDone = true;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.sendMsgLoading = false;
        state.sendMsgError = action.payload;
      })
      .addDefaultCase(state => state),
});

export default messageSlice;
