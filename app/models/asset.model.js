module.exports = (sequelize, Sequelize) => {
    const Asset = sequelize.define("asset", {
      symbol: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      }
    });
    return Asset;
  };