import { STUDENT_TYPES } from "../action/student";
const initialState = [];

const wheelStudentReducer = (state = initialState, action) => {
  switch(action.type) {
    case STUDENT_TYPES.GET_WHEEL_STUDENT:
      return action.payload;
    case STUDENT_TYPES.DELETE_WHEEL_STUDENT:
      const list = action.payload;
      list.forEach(id => {
        state = state.filter(item => item.id !== id);
      });
      return state;
    default:
      return state;
  }
}

export default wheelStudentReducer;