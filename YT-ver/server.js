const express = require('express');
const MongoDB = require("mongodb");
const BodyParser = require("body-parser");

const app = express();
const port = 8000;

// weird import to the server, empty object since there's no server conected
require('./app/routes', (app, {}));
app.listen(port, () => {
  console.log("We are live in port " + port);
});