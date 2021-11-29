import axios from "axios";
import { takeEvery, put, call } from "redux-saga/effects";

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from "./action";
import { loginAction } from "./action";

//middleware
function* loginMiddleware(action: ReturnType<typeof loginAction>) {
  try {
    console.log(action.data);
    /* ( 비동기 함수, [넘길 데이터] ) */
    const result = yield call(loginAPI, action.data);
    console.log(result);
    yield put({
      type: LOGIN_SUCCESS,
      // data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOGIN_FAIL,
      // error: err.response.data,
    });
  }
}
// saga
export function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, loginMiddleware);
}

const loginAPI = () => {
  return axios.post("http://localhost:9999/api/user/login");
};
