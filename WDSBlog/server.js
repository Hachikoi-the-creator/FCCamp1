const express = require('express');
const app = express();

app.listen(5000);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');//Goes directly to views dir
});
