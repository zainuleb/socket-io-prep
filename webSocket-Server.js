const http = require('http');

//Web Socket Import
const ws = require('ws');

//Create Server on 8000
const server = http.createServer((req, res) => {
  res.end('I am Connected');
});

const wss = new ws.Server({ server });

wss.on('headers', (msg) => {
  console.log(msg);
});

wss.on('connection', (ws, req) => {
  ws.send('Welcome to the WebSocket Server');
  ws.on('message', (msg) => {
    console.log(msg);
  });
});

server.listen(8000);
