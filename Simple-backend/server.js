const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, MERN Stack!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
