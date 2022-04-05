const { sequelize } = require('../db/models/index');

exports.dbConnectCheck = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to datatbase is successfull');
  } catch (error) {
    console.log('Connection to database has failed');
  }
};
