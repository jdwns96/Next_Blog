type SidenavAction = ReturnType<typeof hambergerAction>;
interface SidenavState {
  hamberger: boolean;
}

const HAMBERGER = "mode/HAMBERGER" as const;

export const hambergerAction = () => ({ type: HAMBERGER });

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
