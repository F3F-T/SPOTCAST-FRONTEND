import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorizationClient } from ".";
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
