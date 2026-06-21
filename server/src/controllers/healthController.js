const {
  getHealthMessage,
  getTestData,
} = require("../services/healthService");

const getHealthStatus = (req, res) => {
  const response = getHealthMessage();

  res.json(response);
};

const testRequestBody = (req, res) => {
  const response = getTestData(req.body);

  res.json(response);
};

module.exports = {
  getHealthStatus,
  testRequestBody,
};