const mongoose = require("mongoose");

const database = async (connection, user, password, host, db) => {
  try {
    const URI = `${connection}://${user}:${password}@${host}/${db}`
    await mongoose.connect(URI);
    console.log("Successful connection to Database");
  } catch (error) {
    console.log("Failed connection Database");
  }
};

module.exports = database;

