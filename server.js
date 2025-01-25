const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);
const port = 3000;
server.listen(port);
console.log(`Server started on port ${port}`);

//Error handling missing
//Unexpected request handling
//Port already in use
//Memory Leak
//Resource Exhaustion
//File system errors