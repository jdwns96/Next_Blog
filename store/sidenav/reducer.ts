import { HAMBERGER, hambergerAction } from "./action";

export type SidenavAction = ReturnType<typeof hambergerAction>;
export interface SidenavState {
  hamberger: boolean;
}

const initialState: SidenavState = {
  hamberger: false,
};

const reducer = (state: SidenavState = initialState, action: SidenavAction) => {
  switch (action.type) {
    case HAMBERGER:
      return {
        ...state,
        hamberger: !state.hamberger,
      };
    default:
      return state;
  }
};

export default reducer;
