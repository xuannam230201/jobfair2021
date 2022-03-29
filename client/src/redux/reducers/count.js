import { STUDENT_TYPES } from "../action/student";
const initialState = 0;

const countReducer = (state = initialState, action) => {
  switch(action.type) {
    case STUDENT_TYPES.COUNT_STUDENT:
      return action.payload;
    default:
      return state;
  }
}

export default countReducer;