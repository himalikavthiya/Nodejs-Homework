const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "product",
    },
    cart_status: {
        type: Boolean,
        default: true,
    },
    quantity: {
        type: Number
    },
  },
  {
    timestamps: true,
  }
);

const cart = mongoose.model("cart", cartSchema);

module.exports = cart;
