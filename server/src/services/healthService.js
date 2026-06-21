const getHealthMessage = () => {
  return {
    message: "Portfolio Management System API Running",
  };
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