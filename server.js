const express = require('express');
const app = express();

function startServer(port) {
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.log(`Port ${port} is already in use. Trying another port.`);
      startServer(port + 1); // Recursively try the next port
    } else {
      console.log('Error starting the server:', error);
    }
  });
}

const initialPort = process.env.PORT || 3050;
startServer(initialPort);