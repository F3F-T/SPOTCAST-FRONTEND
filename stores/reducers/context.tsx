/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

type ContextState = {
  isMsgModalOpen: boolean;
};

// 기본 state
export const initialState: ContextState = {
  isMsgModalOpen: false,
};

const contextSlice = createSlice({
  name: "context",
  initialState,
  reducers: {
    setMsgModal(state, action) {
      state.isMsgModalOpen = action.payload;
    },
  },
  extraReducers: builder => builder.addDefaultCase(state => state),
});

export const { setMsgModal } = contextSlice.actions;

export default contextSlice;
