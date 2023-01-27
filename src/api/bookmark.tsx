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

export const addBookmark = createAsyncThunk(
  "bookmark/addBookmark",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await authorizationClient.post(API.BOOKMARK, data);
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const deleteBookmark = createAsyncThunk(
  "bookmark/deleteBookmark",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await authorizationClient.delete(API.BOOKMARK, {
        data: { data },
      });
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);
