const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      trim: true,
    },
    order: {
      type: String,
      trim: true,
    },
    paymentMethod: {
      type: String,
      trim: true,
    },
    transactionId: {
      type: Number,
    },
    amount: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model("payment", paymentSchema);
module.exports = Payment;
