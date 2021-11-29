import produce from "immer";

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, loginAction, loginSuccessAction, loginFailAction } from "./action";

export type LoginAction =
  | ReturnType<typeof loginAction>
  | ReturnType<typeof loginSuccessAction>
  | ReturnType<typeof loginFailAction>;
export interface LoginState {
  isLoginRequest: boolean;
  isLoginSuccess: boolean;
  isLoginFail: boolean;
}

const initialState: LoginState = {
  isLoginRequest: false,
  isLoginSuccess: false,
  isLoginFail: false,
};

const reducer = (state: LoginState = initialState, action: LoginAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_REQUEST: {
        draft.isLoginRequest = true;
        break;
      }
      case LOGIN_SUCCESS: {
        draft.isLoginRequest = false;
        break;
      }
      case LOGIN_FAIL: {
        draft.isLoginRequest = false;
        break;
      }
      default:
        break;
    }
  });

export default reducer;
