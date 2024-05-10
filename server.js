const express = require('express');
const app = express();
const port = process.env.PORT || 3050;

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log(`Port ${port} is already in use. Trying another port.`);
    server.listen(port + 1); // Try the next port
  } else {
    console.log('Error starting the server:', error);
  }
});