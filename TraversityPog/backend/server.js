const express = require('express');
const app = express();
const { errorHandler } = require('./middleware/errorMiddleware');
const env = require('dotenv');
const port = process.env.PORT || 5000;//the variable or the hard-coded number

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Doesn't work when trying to use this...
app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler);

// Log for port
app.listen(port, () => console.log(`Served started in port localhost:${port}`));