const http = require('http');

//Web Socket Import
const ws = require('ws');

//Create Server on 8000
const server = http
  .createServer((req, res) => {
    res.end('I am Connected');
  })
  .listen(8000);

const wss = new ws.Server({
  server,
});
