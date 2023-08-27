const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      trim: true,
    },
    items: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
