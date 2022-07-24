const express = require('express');
const socketio = require('socket.io');

const app = express();

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(9000);
const io = socketio(expressServer);

io.on('connection', (socket) => {
  socket.emit('messageFromServer', { data: 'Welcome to the socket.io server' });
  socket.on('messageToServer', (dataFromClient) => {});

  socket.on('newMessageToServer', (newMsg) => {
    console.log(newMsg);
    io.emit('messageToClients', { text: newMsg.text });
  });
});
