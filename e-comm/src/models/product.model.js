const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      trim: true,
    },
   product_price: {
      type: Number,
      trim: true,
    },
    product_des: {
      type: String,
      trim: true
    },
    category:{
      type:mongoose.Types.ObjectId,
      ref: "category"
    },
    product_img: {
      type: String,
    },
    stock: {
      type: Number,
      default: 0
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;
