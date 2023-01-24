import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorizationClient } from ".";
import toastMsg from "../components/common/Toast";
import API from "./config";

export const loadMsgSend = createAsyncThunk(
  "message/loadMsgSend",
  async (_, { rejectWithValue }) => {
    try {
      const response = await authorizationClient.get(API.LOAD_MSG_SEND);
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const loadMsgReceived = createAsyncThunk(
  "message/loadMsgReceived",
  async (_, { rejectWithValue }) => {
    try {
      const response = await authorizationClient.get(API.LOAD_MSG_RECEIVE);
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const sendMessage = createAsyncThunk(
  "message/sendMessage",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await authorizationClient.post(API.MESSAGE_SEND, data);
      toastMsg("메시지 전송 완료", true);
      return response.data.data;
    } catch (error: any) {
      toastMsg("메시지 전송 실패", false);
      return rejectWithValue(error.response.data);
    }
  },
);
