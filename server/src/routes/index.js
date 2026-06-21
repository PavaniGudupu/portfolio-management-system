const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Portfolio Management System API Running",
  });
});

router.post("/test", (req, res) => {
  res.json({
    receivedData: req.body,
  });
});

module.exports = router;