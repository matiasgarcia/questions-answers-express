const mongoose = require('mongoose');

module.exports = (databaseUri) => {
  const { connect, connection } = mongoose;
  connect(databaseUri, { useNewUrlParser: true });
  connection.once('open', () => console.log("MongoDB database connection established successfully"))
};
