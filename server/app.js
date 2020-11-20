require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3300; // Biar beda sama react
const routes = require("./routes");

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log("Server Hosted on: " + PORT));