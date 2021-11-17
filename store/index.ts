import { createStore, combineReducers } from "redux";
import { createWrapper } from "next-redux-wrapper";
import mode from "./mode";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({ mode });

const configureStore = () => {
  const store = createStore(rootReducer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: true,
});

export default wrapper;
