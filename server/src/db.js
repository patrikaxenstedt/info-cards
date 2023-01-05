const mongoose = require("mongoose");

//Create a .env-file with the variable MONGODB_CONNECTION that holds the connection-string.
const URI = process.env.MONGODB_CONNECTION;

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Database was successfully connected! 🚀✨");
});
