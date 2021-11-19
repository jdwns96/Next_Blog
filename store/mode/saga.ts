import { takeEvery, put } from "redux-saga/effects";

import { TOGGLE_MODE } from "./action";
import type { ModeAction } from "./reducer";

//middleware
function* modeMiddleware(action: ModeAction) {}
// saga
export function* modeSaga() {
  yield takeEvery(TOGGLE_MODE, modeMiddleware);
}
