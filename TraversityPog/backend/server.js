const express = require('express');
const app = express();
const dotenv = require('dotenv');
const port = process.env.PORT || 5000;//the variable or the hard-coded number

// app.get('/api/goals', (req, res) => {
//   res.status(200).json({ key: "My value yey GET CALL" });
// });

// Doesn't work when trying to use this...
app.use('/api/goals', require('./routes/goalRoutes'));

app.post('/api/goals', (req, res) => {
  res.status(200).json({ key: "My value yey POST CALL" });
});

// Log for port
app.listen(port, () => console.log(`Served started in port localhost:${port}`));