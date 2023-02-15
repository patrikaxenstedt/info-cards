// Remember to create your .env-file.
require("dotenv").config();

const app = require("./app");
require("./db");

async function main() {
  await app.listen(app.get("port"));
  console.log("Server is up and running on port", app.get("port"));
}

main();
