import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorizationClient } from ".";
import API from "./config";
import { IUser } from "../interface/user";

const editMyInfo = createAsyncThunk(
  "user/editMyInfo",
  async (data: IUser, { rejectWithValue }) => {
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
