const mongoose = require("mongoose");

const database = async (connection, user, password, host, db) => {
  try {
    const URI = `${connection}://${host}`;
    await mongoose.connect(URI, {
      user,
      pass: password,
      dbName: db,
    });
    console.log("Successful connection to Database");
  } catch (error) {
    console.log("Failed connection Database");
  }
};

module.exports = database;

