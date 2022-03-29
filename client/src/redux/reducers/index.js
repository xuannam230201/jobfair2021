import { combineReducers } from "redux";
import navigator from "./navigator";
import student from "./student";
import attendance from "./attendance";
import liveStudent from "./liveStudent";
import alert from './alert';
import socket from './socket';
import count from './count';
import wheelStudent from './wheelStudent'

export default combineReducers({
  navigator,
  student,
  attendance,
  liveStudent,
  alert,
  socket,
  count,
  wheelStudent,
  
});