import { takeEvery, put } from "redux-saga/effects";

type ModeAction = ReturnType<typeof toggleActionSaga> | ReturnType<typeof darkAction> | ReturnType<typeof lightAction>;
interface ModeState {
  mode: boolean;
}

const TOGGLE_MODE = "mode/TOGGLE_MODE" as const;
const DARK_MODE = "mode/DARK_MODE" as const;
const LIGHT_MODE = "mode/LIGHT_MODE" as const;

export const toggleActionSaga = (value: boolean) => ({ type: TOGGLE_MODE, value });
export const darkAction = () => ({ type: DARK_MODE });
export const lightAction = () => ({ type: LIGHT_MODE });

//middleware
function* modeMiddleware(action: ModeAction) {}
// saga
export function* modeSaga() {
  yield takeEvery([TOGGLE_MODE], modeMiddleware);
}

const initialState: ModeState = {
  mode: true,
};

const reducer = (state: ModeState = initialState, action: ModeAction) => {
  switch (action.type) {
    case TOGGLE_MODE:
      return {
        ...state,
        mode: action.value,
      };
    case DARK_MODE:
      return {
        ...state,
        mode: true,
      };
    case LIGHT_MODE:
      return {
        ...state,
        mode: false,
      };
    default:
      return state;
  }
};

export default reducer;
