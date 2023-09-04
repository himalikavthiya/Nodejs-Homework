const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    user: {
      type:mongoose.Types.ObjectId,
      ref: "user"
    },
    product: {
      type:mongoose.Types.ObjectId,
      ref: "product"
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
