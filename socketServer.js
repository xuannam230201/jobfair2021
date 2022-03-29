let users = [];

const SocketServer = (socket) => {
  //Connect - Disconnect
  socket.on('joinUser', () => {
    users.push({socketId: socket.id});
    console.log(users)
  });

  socket.on('disconnect', () => {
    users = users.filter(user => user.socketId !== socket.id);
  });

  socket.on('addStudent', (student) => {
    socket.emit('addToClient', student);
    if(users.length > 0) {
      users.forEach(user => {
          socket.to(`${user.socketId}`).emit('addToClient', student);
      })
    }
  });
}

module.exports = SocketServer;