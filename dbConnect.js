const mongoose = require("mongoose");

const URL =
  "mongodb+srv://prakash:prakash@cluster0.alycoap.mongodb.net/satya-retailstore";

mongoose.connect(URL);

let connectionObj = mongoose.connection;

connectionObj.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

connectionObj.on("error", () => {
  console.log("Mongo DB Connection Failed");
});
