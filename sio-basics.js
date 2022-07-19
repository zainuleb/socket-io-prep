const http = require('http');
const sio = require('socket.io');

//Create Server on 8000
const server = http.createServer((req, res) => {
  res.end('I am Connected');
});

const io = sio(server);

io.on('connection', (socket, req) => {
  //ws.send becomes socket.emit
  socket.emit('welcome', 'Welcome to the WebSocket Server');
  socket.on('message', (msg) => {
    console.log(msg);
  });
});

server.listen(8000);
