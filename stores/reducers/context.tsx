/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

type ContextState = {
  isMsgModalOpen: boolean;
  isBookmarkModalOpen: boolean;
};

// 기본 state
export const initialState: ContextState = {
  isMsgModalOpen: false,
  isBookmarkModalOpen: false,
};

const contextSlice = createSlice({
  name: "context",
  initialState,
  reducers: {
    setMsgModal(state, action) {
      state.isMsgModalOpen = action.payload;
    },
    setBookmarkModal(state, action) {
      state.isBookmarkModalOpen = action.payload;
    },
  },
  extraReducers: builder => builder.addDefaultCase(state => state),
});

export const { setMsgModal, setBookmarkModal } = contextSlice.actions;

export default contextSlice;
