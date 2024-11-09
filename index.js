// index.js

const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Node.js!\n');
});

// Listen on port 3000
server.listen(8000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
