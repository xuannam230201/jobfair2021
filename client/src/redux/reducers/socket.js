export const SOCKET_TYPES = {
  SOCKET: 'SOCKET',
}

const initialState = false;

const socketReducer = (state = initialState, action) => {
  switch(action.type) {
    case SOCKET_TYPES.SOCKET:
      return action.payload;
    default:
      return state;
  }
}

export default socketReducer;