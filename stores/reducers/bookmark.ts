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
  reducers: {
    resetFollowing(state) {
      state.following = [];
    },
    resetFollower(state) {
      state.follower = [];
    },
  },
  extraReducers: builder =>
    builder
      .addCase(deleteBookmark.pending, state => {
        state.deleteBookmarkLoading = true;
        state.deleteBookmarkDone = false;
        state.deleteBookmarkError = null;
      })
      .addCase(deleteBookmark.fulfilled, (state, action) => {
        state.deleteBookmarkLoading = false;
        state.deleteBookmarkDone = true;
        state.following = state.following.filter(
          i => i.memberId !== action.payload,
        );
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
      .addCase(addBookmark.fulfilled, (state, action) => {
        state.addBookmarkLoadng = false;
        state.addBookmarkDone = true;
        state.follower = state.follower.map(i =>
          i.memberId === action.payload ? { ...i, exist: true } : i,
        );
      })
      .addCase(addBookmark.rejected, (state, action) => {
        state.addBookmarkLoadng = false;
        state.addBookmarkError = action.payload;
      })

      .addDefaultCase(state => state),
});

export const { resetFollower, resetFollowing } = bookmarkSlice.actions;
export default bookmarkSlice;
