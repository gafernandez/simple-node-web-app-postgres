module.exports = (sequelize, Sequelize) => {
    const Alarm = sequelize.define("alarm", {
      name: {
        type: Sequelize.STRING
      }
    });
    return Alarm;
  };