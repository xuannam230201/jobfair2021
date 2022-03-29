import { STUDENT_TYPES } from "../action/student";
const initialState = [];

const liveStudentReducer = (state = initialState, action) => {
  switch(action.type) {
    case STUDENT_TYPES.LIVE_STUDENT:
      let student = action.payload;
      state = state.filter(item => (item.id !== student.id));
      if(state.length === 10)
        state.pop();
      return [student, ...state];
    case STUDENT_TYPES.INIT_LIVE_STUDENT:
      return action.payload;
    default:
      return state;
  }
}

export default liveStudentReducer;