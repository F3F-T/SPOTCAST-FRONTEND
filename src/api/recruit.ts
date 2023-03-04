import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorizationClient } from ".";
import toastMsg from "../components/common/Toast";
import API from "./config";

const postRecruit = createAsyncThunk(
  "recruit/postRecruit",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await authorizationClient.post(API.BOARD, data);
      toastMsg("구인공고 게시 완료", true);
      return response.data.data;
    } catch (error: any) {
      toastMsg("구인공고 게시 실패", false);
      return rejectWithValue(error.response?.data || null);
    }
  },
);

export default postRecruit;
