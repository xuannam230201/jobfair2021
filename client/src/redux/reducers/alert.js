import { ALERT_TYPES } from "../action/alert";

const initialState = {
  inCheck: false,
  outCheck: false,
};

const alertReducer = (state = initialState, action) => {
  switch(action.type) {
    case ALERT_TYPES.SEARCH_ALERT:
      return {...state, inCheck: false};
    case ALERT_TYPES.COMPLETE_ALERT:
      return {...state, outCheck: action.payload};
    default:
      return state;
  }
}

export default alertReducer;