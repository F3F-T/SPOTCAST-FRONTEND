import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authorizationClient } from ".";
import toastMsg from "../components/common/Toast";
import { IUser } from "../interface/user";
import API from "./config";

axios.defaults.baseURL = API.BASE_URL;
axios.defaults.withCredentials = true;

const loadField = createAsyncThunk(
  "user/getField",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API.MEMBER}field`);
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  },
);

const editMyInfo = createAsyncThunk(
  "user/editMyInfo",
  async (data: IUser, { rejectWithValue }) => {
    try {
      const {
        id,
        information,
        twitter,
        instagram,
        otherSns,
        egName,
        field,
        categoryInfo,
      } = data;
      const response = await authorizationClient.patch(
        `${API.MEMBER}${id}/change/information`,
        {
          information,
          twitter,
          instagram,
          otherSns,
          egName,
          field,
          categoryInfo,
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

export { editMyInfo, loadUser, loadField };
