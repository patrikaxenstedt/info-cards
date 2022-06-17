const mongoose = require("mongoose");

const URI = process.env.MONGODB_CONNECTION;

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Database was successfully connected! 🚀✨");
});
