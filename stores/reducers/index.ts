import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import userSlice from "./user";
import contextSlice from "./context";

// (이전상태, 액션) => 다음상태
const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user: userSlice.reducer,
        context: contextSlice.reducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
