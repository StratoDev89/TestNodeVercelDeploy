require("dotenv").config();

const config = {
  port: process.env.PORT,
  connection: process.env.CONNECTION
};

module.exports = config;
