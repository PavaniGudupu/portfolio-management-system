const express = require("express");
const loggerMiddleware = require("./middleware/loggerMiddleware");

const app = express();

app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.json({
    message: "Portfolio Management System API Running",
  });
});

module.exports = app;