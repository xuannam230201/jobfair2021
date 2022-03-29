import { getDataAPI, postDataAPI } from "../../utils/fetchData";
import { ALERT_TYPES } from "./alert";

export const STUDENT_TYPES = {
  SEARCH_STUDENT: 'SEARCH_STUDENT',
  ADD_STUDENT: 'ADD_STUDENT',
  COMPLETE_STUDENT: 'COMPLETE_STUDENT',
  LIVE_STUDENT: 'LIVE_STUDENT',
  INIT_LIVE_STUDENT: 'INIT_LIVE_STUDENT',
  COUNT_STUDENT: 'COUNT_STUDENT',
  GET_WHEEL_STUDENT: 'GET_WHEEL_STUDENT',
  DELETE_WHEEL_STUDENT: 'DELETE_WHEEL_STUDENT',
};

export const searchStudent = (id, socket) => async(dispatch) => {
  try {
    const res = await getDataAPI(`students/${id}`);
    if(res.data.student) {
      dispatch({
        type: STUDENT_TYPES.ADD_STUDENT,
        payload: res.data,
      });
      dispatch({
        type: ALERT_TYPES.SEARCH_ALERT,
        payload: false,
      });
      socket.emit('addStudent', res.data.student);
    } else {
      dispatch({
        type: ALERT_TYPES.SEARCH_ALERT,
        payload: true,
      });
    }
  } catch(err) {

  }
}

export const completeStudent = (id) => async(dispatch) => {
  try {
    const res = await getDataAPI(`students/out/${id}`);
    if(res.data.student) {
      dispatch({
        type: STUDENT_TYPES.COMPLETE_STUDENT,
        payload: res.data,
      });
      dispatch({
        type: ALERT_TYPES.COMPLETE_ALERT,
        payload: false,
      });
    } else {
      dispatch({
        type: ALERT_TYPES.COMPLETE_ALERT,
        payload: true,
      });
    }
  } catch(err) {

  }
}

export const initLiveStudent = () => async(dispatch) => {
  try {
    const res = await getDataAPI(`students/getLive`);
    dispatch({
      type: STUDENT_TYPES.INIT_LIVE_STUDENT,
      payload: res.data.student,
    })
  }
  catch(err) {

  }
}

export const getWheelStudent = () => async(dispatch) => {
  try {
    const res = await getDataAPI(`students/wheel`);
    dispatch({
      type: STUDENT_TYPES.GET_WHEEL_STUDENT,
      payload: res.data.students,
    })
  } catch(err) {

  }
}

export const deleteWheelStudent = (list) => async(dispatch) => {
  try {
    await postDataAPI(`students/wheel/delete`, {list});
    dispatch({
      type: STUDENT_TYPES.DELETE_WHEEL_STUDENT,
      payload: list, 
    })
  } catch(err) {

  }
}