import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorizationClient } from ".";
import { IUser } from "../interface/user";
import API from "./config";

const editMyInfo = createAsyncThunk(
  "user/editMyInfo",
  async (data: IUser, { rejectWithValue }) => {
    try {
      const { id, information, twitter, instagram, otherSns } = data;
      const response = await authorizationClient.post(
        `${API.MEMBER}${id}/change/information`,
        {
          information,
          twitter,
          instagram,
          otherSns,
        },
      );
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default editMyInfo;
