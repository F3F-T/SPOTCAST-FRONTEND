import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorizationClient } from ".";
import toastMsg from "../components/common/Toast";
import { IUser } from "../interface/user";
import API from "./config";

const editMyInfo = createAsyncThunk(
  "user/editMyInfo",
  async (data: IUser, { rejectWithValue }) => {
    try {
      const { id, information, twitter, instagram, otherSns, egName, field } =
        data;
      const response = await authorizationClient.patch(
        `${API.MEMBER}${id}/change/information`,
        {
          information,
          twitter,
          instagram,
          otherSns,
          egName,
          field,
        },
      );
      toastMsg("수정 완료", true);
      return response.data.data;
    } catch (error: any) {
      toastMsg("수정 실패", false);
      return rejectWithValue(error.response.data);
    }
  },
);

const getField = async () => {
  try {
    const response = await authorizationClient.get(`${API.MEMBER}field`);
    return response.data.data;
  } catch (error: any) {
    return error.response.data;
  }
};

const loadUser = createAsyncThunk(
  "user/loadUser",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await authorizationClient.get(
        `${API.MEMBER}${Object.values(data)}`,
      );
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || null);
    }
  },
);

export { editMyInfo, loadUser, getField };
