const express = require("express");
const cors = require("cors");

const app = express();

app.set("port", 4000);
app.use(cors());
app.use(express.json());

app.use("/api/contacts", require("./routes/contacts"));

module.exports = app;
