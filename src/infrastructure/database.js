const mongoose = require("mongoose");

const database = async (URI) => {
  try {
    await mongoose.connect(URI);
    console.log("Successful connection to Database");
  } catch (error) {
    console.log("Failed connection Database");
  }
};

module.exports = database;
