const express = require("express");

const {
  getHealthStatus,
  testRequestBody,
} = require("../controllers/healthController");

const router = express.Router();

router.get("/", getHealthStatus);

router.post("/test", testRequestBody);

module.exports = router;