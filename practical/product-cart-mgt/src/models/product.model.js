const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
    },
    product_img: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const product = mongoose.model("product", productSchema);

module.exports = product;
