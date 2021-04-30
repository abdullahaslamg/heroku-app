const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

module.exports = function() {
  const DB = process.env.DATABASE_LOCAL;

  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('Connection is successfull');
    })
    .catch(() => {
      console.log('Cannot connect to database');
    });
};
