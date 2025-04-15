const mongoose = require('mongoose');
const { DB_NAME } = require('../constants.js');
module.exports = async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb://127.0.0.1:27017/Cluster0"
    );

    console.info(
      '🌏 Mongodb Connecting successfully host : ' +
        connectionInstance.connection.host
    );
  } catch (error) {
    console.error('MongoDB conection error : ' + error);
    process.exit(1);
  }
};
