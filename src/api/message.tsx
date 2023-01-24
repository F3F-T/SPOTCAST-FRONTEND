import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authorizationClient } from ".";
import toastMsg from "../components/common/Toast";
import API from "./config";
import { MsgSizeProps } from "../interface/messgae";

axios.defaults.baseURL = API.BASE_URL;
axios.defaults.withCredentials = true;

export const preLoadMsgReceived = createAsyncThunk(
  "message/loadMsgReceived",
  async (data: MsgSizeProps, { rejectWithValue }) => {
    try {
      const { page, size } = data;
      const response = await axios.get(
        `${API.LOAD_MSG_RECEIVE}?page=${page}&size=${size}`,
      );
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const preLoadMsgSend = createAsyncThunk(
  "message/loadMsgSend",
  async (data: MsgSizeProps, { rejectWithValue }) => {
    try {
      const { page, size } = data;
      const response = await axios.get(
        `${API.LOAD_MSG_SEND}?page=${page}&size=${size}`,
      );
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const loadMsgSend = createAsyncThunk(
  "message/loadMsgSend",
  async (data: MsgSizeProps, { rejectWithValue }) => {
    try {
      const { page, size } = data;
      const response = await authorizationClient.get(
        `${API.LOAD_MSG_SEND}?page=${page}&size=${size}`,
      );
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const loadMsgReceived = createAsyncThunk(
  "message/loadMsgReceived",
  async (data: MsgSizeProps, { rejectWithValue }) => {
    try {
      const { page, size } = data;
      const response = await authorizationClient.get(
        `${API.LOAD_MSG_RECEIVE}?page=${page}&size=${size}`,
      );
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
