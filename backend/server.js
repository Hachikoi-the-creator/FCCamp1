const express = require('express');
const app = express();
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const env = require('dotenv').config();
const port = process.env.PORT || 5000;//the variable or the hard-coded number

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Doesn't work when trying to use this...
app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler);

// Log for port
app.listen(port, () => console.log(`Served started in port localhost:${port}`));