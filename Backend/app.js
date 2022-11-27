require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db");
const toDoRoutes = require("./routes/toDoRoutes");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();
app.use("/", toDoRoutes);

module.exports = app;
