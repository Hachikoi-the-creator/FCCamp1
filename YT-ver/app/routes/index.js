// This is like the app.js in React, but for routing
const noteRoutes = require("./note_routes");


module.exports = (app, db) => {
  noteRoutes(app, db);
};