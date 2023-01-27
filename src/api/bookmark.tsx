import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorizationClient } from ".";
import API from "./config";

export const loadFollower = createAsyncThunk(
  "bookmark/loadFollower",
  async (page: number, { rejectWithValue }) => {
    try {
      const response = await authorizationClient.get(
        `${API.LOAD_FOLLOWER}?page=${page}&size=6`,
      );
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const loadFollowing = createAsyncThunk(
  "bookmark/loadFollowing",
  async (page: number, { rejectWithValue }) => {
    try {
      const response = await authorizationClient.get(
        `${API.LOAD_FOLLWING}?page=${page}&size=6`,
      );
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  },
);
