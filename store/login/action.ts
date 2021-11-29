export const LOGIN_REQUEST = "login/LOGIN_REQUEST" as const;
export const LOGIN_SUCCESS = "login/LOGIN_SUCCESS" as const;
export const LOGIN_FAIL = "login/LOGIN_FAIL" as const;

export const loginAction = (data: { id: string; password: string }) => ({
  type: LOGIN_REQUEST,
  data,
});
export const loginSuccessAction = () => ({
  type: LOGIN_SUCCESS,
});
export const loginFailAction = () => ({
  type: LOGIN_FAIL,
});
