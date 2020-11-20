require("dotenv").config();
require("./config");
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3300; // Biar beda sama react
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => console.log("Server Hosted on: " + PORT));
