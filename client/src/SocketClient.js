import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { STUDENT_TYPES } from "./redux/action/student";
import {getDataAPI} from './utils/fetchData';

const SocketClient = () => {
  const {socket} = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.emit('joinUser');
  }, [socket]);

  useEffect(() => {
    socket.on('addToClient', async(student) => {
      dispatch({type: STUDENT_TYPES.LIVE_STUDENT, payload: student});
      const res = await getDataAPI(`students/count`);
      dispatch({type: STUDENT_TYPES.COUNT_STUDENT, payload: res.data.number});
    })
    return () => socket.off('addToClient')
  }, [socket, dispatch]);

  return (
    <div>

    </div>
  )
}

export default SocketClient;