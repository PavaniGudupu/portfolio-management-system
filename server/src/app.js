const express = require("express");
const loggerMiddleware = require("./middleware/loggerMiddleware");

const app = express();

app.use(express.json());

app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.json({
    message: "Portfolio Management System API Running",
  });
});

app.post("/test", (req, res) => {
  res.json({
    receivedData: req.body,
  });
});

module.exports = app;