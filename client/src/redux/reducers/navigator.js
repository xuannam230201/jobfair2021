import { NAVIGATOR_TYPES } from "../action/navigator";

const initialState = "Thống kê";

const navigatorReducer = (state = initialState, action) => {
  switch(action.type) {
    case NAVIGATOR_TYPES.CHOOSE_TAB:
      return action.payload;
    default:
      return state;
  }
}

export default navigatorReducer;