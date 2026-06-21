const express = require("express");
const loggerMiddleware = require("./middleware/loggerMiddleware");
const routes = require("./routes");

const app = express();

app.use(express.json());

app.use(loggerMiddleware);

app.use("/", routes);

module.exports = app;