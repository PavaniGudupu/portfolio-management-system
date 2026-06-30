const { getHealthData } = require("../repositories/healthRepository");

const getHealthMessage = () => {
  return getHealthData();
};

const getTestData = (data) => {
  return {
    receivedData: data,
  };
};

module.exports = {
  getHealthMessage,
  getTestData,
};