const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('works fine :) we are connected with the DB');
  } catch (error) {
    console.log('error', error.message);

    //Exit the process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
