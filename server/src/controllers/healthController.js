const getHealthStatus = (req, res) => {
  res.json({
    message: "Portfolio Management System API Running",
  });
};

const testRequestBody = (req, res) => {
  res.json({
    receivedData: req.body,
  });
};

module.exports = {
  getHealthStatus,
  testRequestBody,
};