const mongoose = require("mongoose");
const { MONGODB_URI } = require("./serverConfig");


async function connect () {
  try {
    const connection = await mongoose.connect(MONGODB_URI);

    console.log("Mongoose connected to db");

    connection.connection.on("connected", () => {
      console.log("Mongoose connected to db");
    });

    connection.connection.on("error", (err) => {
      console.log(err);
    });
  } catch (err) {
    console.log("Mongoose failed to connect");
    console.log(err);
  }
}

module.exports = { connect };