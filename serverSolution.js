const http = require('http');

const requestListener = (request, response) => {
  try {
    //Check for unexpected request methods or headers
    if (request.method !== 'GET') {
      response.writeHead(405, {'Content-Type': 'text/plain'});
      response.end('Method Not Allowed');
      return; 
    }

    response.writeHead(200);
    response.end('Hello, World!');
  } catch (error) {
    console.error('Error handling request:', error);
    response.writeHead(500, {'Content-Type': 'text/plain'});
    response.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);
const port = 3000;

//Error handling for server listening
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use`);
  } else {
    console.error(`Server error:`, error);
  }
});

server.listen(port);
console.log(`Server started on port ${port}`);