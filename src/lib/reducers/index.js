import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({});
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
