type ModeAction = ReturnType<typeof darkAction> | ReturnType<typeof lightAction>;
interface ModeState {
  mode: boolean;
}

const DARK_MODE = "mode/DARK_MODE" as const;
const LIGHT_MODE = "mode/LIGHT_MODE" as const;

export const darkAction = () => ({ type: DARK_MODE });
export const lightAction = () => ({ type: LIGHT_MODE });

const initialState: ModeState = {
  mode: true,
};

const reducer = (state: ModeState = initialState, action: ModeAction) => {
  switch (action.type) {
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
