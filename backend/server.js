const express = require('express');
const bodyParser = require('body-parser');
const env = require('./config/env');
const setupDatabase = require('./config/database');
const app = express();

setupDatabase(env.databaseUri);
app.use(bodyParser.json());

app.listen(env.port, function() {
  console.log("Server is running on Port: " + env.port);
});
