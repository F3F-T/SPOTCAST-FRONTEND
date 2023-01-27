/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import {
  deleteBookmark,
  addBookmark,
  loadFollower,
  loadFollowing,
} from "../../src/api/bookmark";
import { IBookmark } from "../../src/interface/bookmark";

type BookmarkState = {
  follower: IBookmark[];
  loadFollowerLoading: boolean;
  loadFollowerDone: boolean;
  loadFollowerError: any;
  hasMoreFollower: boolean;
  following: IBookmark[];
  loadFollowingLoading: boolean;
  loadFollowingDone: boolean;
  loadFollowingError: any;
  hasMoreFollowing: boolean;
  deleteBookmarkLoading: boolean;
  deleteBookmarkDone: boolean;
  deleteBookmarkError: any;
  addBookmarkLoadng: boolean;
  addBookmarkDone: boolean;
  addBookmarkError: any;
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
  deleteBookmarkLoading: false,
  deleteBookmarkDone: false,
  deleteBookmarkError: null,
  addBookmarkLoadng: false,
  addBookmarkDone: false,
  addBookmarkError: null,
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
        state.follower = state.follower.concat(action.payload.content);
        state.hasMoreFollower = action.payload.content.length >= 6;
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
        state.following = state.following.concat(action.payload.content);
        state.hasMoreFollowing = action.payload.content.length >= 6;
      })
      .addCase(loadFollowing.rejected, (state, action) => {
        state.loadFollowingLoading = false;
        state.loadFollowingError = action.payload;
      })
      .addCase(deleteBookmark.pending, state => {
        state.deleteBookmarkLoading = true;
        state.deleteBookmarkDone = false;
        state.deleteBookmarkError = null;
      })
      .addCase(deleteBookmark.fulfilled, state => {
        state.deleteBookmarkLoading = false;
        state.deleteBookmarkDone = true;
      })
      .addCase(deleteBookmark.rejected, (state, action) => {
        state.deleteBookmarkLoading = false;
        state.deleteBookmarkError = action.payload;
      })
      .addCase(addBookmark.pending, state => {
        state.addBookmarkLoadng = true;
        state.addBookmarkDone = false;
        state.addBookmarkError = null;
      })
      .addCase(addBookmark.fulfilled, state => {
        state.addBookmarkLoadng = false;
        state.addBookmarkDone = true;
      })
      .addCase(addBookmark.rejected, (state, action) => {
        state.addBookmarkLoadng = false;
        state.addBookmarkError = action.payload;
      })

      .addDefaultCase(state => state),
});

export default bookmarkSlice;
