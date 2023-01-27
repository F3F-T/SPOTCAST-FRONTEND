/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { loadFollower, loadFollowing } from "../../src/api/bookmark";

type BookmarkState = {
  follower: any;
  loadFollowerLoading: boolean;
  loadFollowerDone: boolean;
  loadFollowerError: any;
  hasMoreFollower: boolean;
  following: any;
  loadFollowingLoading: boolean;
  loadFollowingDone: boolean;
  loadFollowingError: any;
  hasMoreFollowing: boolean;
  lastPage: number;
};

// 기본 state
export const initialState: BookmarkState = {
  follower: [],
  loadFollowerLoading: false,
  loadFollowerDone: false,
  loadFollowerError: null,
  hasMoreFollower: true,
  following: [],
  loadFollowingLoading: false,
  loadFollowingDone: false,
  loadFollowingError: null,
  hasMoreFollowing: true,
  lastPage: 0,
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(loadFollower.pending, state => {
        state.loadFollowerLoading = true;
        state.loadFollowerDone = false;
        state.loadFollowerError = null;
      })
      .addCase(loadFollower.fulfilled, (state, action) => {
        state.loadFollowerLoading = false;
        state.loadFollowerDone = true;
        state.follower = state.follower.concat(action.payload);
        state.hasMoreFollower = action.payload.length === 6;
      })
      .addCase(loadFollower.rejected, (state, action) => {
        state.loadFollowerLoading = false;
        state.loadFollowerError = action.payload;
      })
      .addCase(loadFollowing.pending, state => {
        state.loadFollowingLoading = true;
        state.loadFollowingDone = false;
        state.loadFollowingError = null;
      })
      .addCase(loadFollowing.fulfilled, (state, action) => {
        state.loadFollowingLoading = false;
        state.loadFollowingDone = true;
        state.following = [].concat(state.following, action.payload.content);
        state.hasMoreFollowing = action.payload.length === 6;
        state.lastPage += 1;
      })
      .addCase(loadFollowing.rejected, (state, action) => {
        state.loadFollowingLoading = false;
        state.loadFollowingError = action.payload;
      })
      .addDefaultCase(state => state),
});

export default bookmarkSlice;
