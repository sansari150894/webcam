import { TOGGLE_BUTTON } from "./constants";

export default function rootReducer(state = null, action) {
  switch (action.type) {
    case TOGGLE_BUTTON: {
      return {
        ...state,
        toggleState: !state.toggleState
      };
    }
    default:
      return state;
  }
}
