import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import mode from "./mode/reducer";
import sidenav from "./sidenav/reducer";

const rootReducer = combineReducers({
  index: (state: object = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  },
  mode,
  sidenav,
});

export default rootReducer;
