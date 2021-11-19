import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleware from "redux-saga";

import { createWrapper } from "next-redux-wrapper";

// https://velog.io/@rlatmdgns94/Next.js-redux-redux-saga-%EC%A0%81%EC%9A%A9

// Selector 에서 스토어를 호출할때 필요하다.
export type RootState = ReturnType<typeof rootReducer>;

// redux
// 모든 리듀서를 하나로 모아 만든다. 일반 CRA 형태에선 이렇게 사용했다.
// const rootReducer = combineReducers({ mode, sidenav });

const configureStore = () => {
  // 리덕스 사가를 미들웨어와 연결시키기 위해 인스턴스를 생성한다.
  const sagaMiddleware = createSagaMiddleware();
  // 각종 미들웨어들을 한곳에 모아 관리
  const middlewares = [sagaMiddleware];

  // 인헨서 라는 두번째 인자를 createStore 가 받는다.
  // 미들 웨어로 묶어논 객체 인것 같다.
  // process.env.NODE_ENV 라는 내부 환경변수인데 CRA 에도 존재한다. 해당 프레임워크가 자체적으로 관리하는듯 하다.
  // 빌드의 유무로 해당 값이 변하는것 같다.
  const enhancer = process.env.NODE_ENV === "production" ? compose(applyMiddleware(...middlewares)) : composeWithDevTools(applyMiddleware(...middlewares));

  // 스토어를 생성한다. 모른 리듀서를 모아놓은 루트 리듀서 그리고 미들웨어 관련 인헨서를 받는다.
  const store = createStore(rootReducer, enhancer);
  // CRA 에서와 다르게 사가 제너레이터를 생성한다.
  // 스토어의 sagaTask 라는 키값으로 값을 저장하는것 같다. 아마 next-redux-wrapper 의 동작 방식인것 같다.
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
