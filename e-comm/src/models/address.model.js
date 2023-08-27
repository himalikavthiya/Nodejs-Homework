const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      trim: true,
    },
    street: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Address = mongoose.model("address", addressSchema);
module.exports = Address;
