const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      trim: true,
    },
    products: {
      type: String,
      trim: true,
    },
    totalprice: {
      type: Number,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
