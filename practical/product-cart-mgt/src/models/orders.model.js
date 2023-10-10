const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    card: {
      type: mongoose.Types.ObjectId,
      ref: "card",
    },
    totalprice: {
      type: Number,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const order = mongoose.model("order", orderSchema);

module.exports = order;
