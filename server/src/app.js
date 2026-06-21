const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Portfolio Management System API Running",
  });
});

module.exports = app;