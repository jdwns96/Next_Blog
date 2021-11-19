import { DARK_MODE, LIGHT_MODE, TOGGLE_MODE, darkAction, lightAction, toggleActionSaga } from "./action";

export type ModeAction = ReturnType<typeof toggleActionSaga> | ReturnType<typeof darkAction> | ReturnType<typeof lightAction>;
export interface ModeState {
  mode: boolean;
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
