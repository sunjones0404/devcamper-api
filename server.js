const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

// Load Environment Variables
dotenv.config({ path: './config/config.env' });

// Connect to DB
connectDB();

// Import Route Files
const bootcamps = require('./routes/bootcamps');

// Initialist App
const app = express();

// Body parser
app.use(express.json());

// Dev Logging Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount Routers
app.use('/api/v1/bootcamps', bootcamps);

// -------------------------------------
//  SERVER SETTINGS
// -------------------------------------

// Port Environment Variable
const PORT = process.env.PORT || 5000;

// Run Server
const server = app.listen(
  PORT,
  console.log(
    ` Server running in ${process.env.NODE_ENV} mode on port: ${PORT} `.black
      .bgBrightGreen
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(` Error: ${err.message} `.black.bgBrightRed);
  // Close server & exit process
  server.close(() => process.exit(1));
});
