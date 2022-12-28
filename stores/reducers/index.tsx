import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import userSlice from "./user";

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    user: userSlice.reducer,
    // 여기에 추가
  })(state, action);
};

export default rootReducer;
