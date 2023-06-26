require("dotenv").config();

const config = {
  port: process.env.PORT,
  dbUri: process.env.DB_URI
};

module.exports = config;
