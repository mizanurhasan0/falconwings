// Import Library

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes"); // includes the routes.js file
const cors = require("cors"); // includes cors module
require("dotenv").config();

// Call library functionality
app.use(cors()); // We're telling express to use CORS
app.use(express.json()); // we need to tell server to use json as well
app.use(routes); // tells the server to use the routes in routes.js

// Db Connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("database connection"));

// Server Start
app.listen(process.env.PORT, () => {
  console.log("The API is running port..." + process.env.PORT);
});
