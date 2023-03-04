/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

type ContextState = {
  isMsgModalOpen: boolean;
  isFollowingModalOpen: boolean;
  isFollowerModalOpen: boolean;
};

// 기본 state
export const initialState: ContextState = {
  isMsgModalOpen: false,
  isFollowingModalOpen: false,
  isFollowerModalOpen: false,
};

const contextSlice = createSlice({
  name: "context",
  initialState,
  reducers: {
    setMsgModal(state, action) {
      state.isMsgModalOpen = action.payload;
    },
    setFollowingModal(state, action) {
      state.isFollowingModalOpen = action.payload;
    },
    setFollowerModal(state, action) {
      state.isFollowerModalOpen = action.payload;
    },
  },
  extraReducers: builder => builder.addDefaultCase(state => state),
});

export const { setMsgModal, setFollowingModal, setFollowerModal } =
  contextSlice.actions;

export default contextSlice;
