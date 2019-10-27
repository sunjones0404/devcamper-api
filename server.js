const express = require('express');
const dotenv = require('dotenv');

// Load Environment Variables
dotenv.config({ path: './config/config.env' });

// Initialist App
const app = express();

// PORT
const PORT = process.env.PORT || 5000;

// Run Server
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
);
