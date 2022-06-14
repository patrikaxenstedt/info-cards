const mongoose = require("mongoose");

// Om det finns en .env-fil med variablen MONGODB_CONNECTION så kommer den ansluta till den databasen, alla notes kommer då att sparas där.
// Finns det ingen .env-fil med variablen MONGODB_CONNECTION så kommer all data/notes sparas lokalt.
const URI = process.env.MONGODB_CONNECTION
  ? process.env.MONGODB_CONNECTION
  : "mongodb://localhost/mylocaldatabase";

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Database was successfully connected! 🚀✨");
});
