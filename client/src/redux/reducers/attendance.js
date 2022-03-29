import { STUDENT_TYPES } from "../action/student";
const initialState = [];

const attendanceReducer = (state = initialState, action) => {
  switch(action.type) {
    case STUDENT_TYPES.COMPLETE_STUDENT:
      let student = action.payload.student;
      state = state.filter(item => (item.id !== student.id));
      if(state.length === 10)
        state.pop();
      return [student, ...state];
    default:
      return state;
  }
}

export default attendanceReducer;