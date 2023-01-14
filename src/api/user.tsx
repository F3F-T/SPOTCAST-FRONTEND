import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorizationClient } from ".";
import API from "./config";
import { UserProps } from "../interface/user";

const editMyInfo = createAsyncThunk(
  "user/editMyInfo",
  async (data: UserProps, { rejectWithValue }) => {
    try {
      const response = await authorizationClient.patch(
        `${API.MEMBER}${data.id}`,
        data,
      );
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default editMyInfo;
