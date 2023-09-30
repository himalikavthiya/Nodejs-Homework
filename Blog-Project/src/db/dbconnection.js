const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const MONGODB_URL = process.env.MONGODB_URL;

const connectDB = async () => {
  mongoose
    .connect(MONGODB_URL)
    .then(() => {
      console.log("Connect to MONGODB....");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { connectDB };
