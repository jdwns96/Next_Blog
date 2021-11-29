import { all } from "redux-saga/effects";

import { modeSaga } from "./mode/saga";
import { loginSaga } from "./login/saga";

// redux - saga
// 리덕스 사가로 이루어진 미들웨어의 집합
export default function* rootSaga() {
  yield all([modeSaga(), loginSaga()]);
}
