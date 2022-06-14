const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;
const ROOT_DIR = path.join(__dirname, '../public');

const server = http.createServer();
server.on('request', (request, res) => {
  console.log(request.url);

  res.end(dataRoute(request.url));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const dataRoute = function (path) {
  let dataBuffer;
  switch (path) {
    case '/raw-html':
      return '<h1>Hellow!</h1>';
    case '/':
    case '/favicon.ico':
      dataBuffer = fs.readFileSync(ROOT_DIR + '/index.html');
      return dataBuffer.toString();
    case '/users':
      dataBuffer = fs.readFileSync(ROOT_DIR + '/users.json');
      return dataBuffer.toString();

    default:
      dataBuffer = fs.readFileSync(ROOT_DIR + '/' + path + '.html');
      return dataBuffer.toString();
  }
};
