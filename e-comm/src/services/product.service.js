const { Product } = require("../models");

/** Create Product*/
const createProduct = async (reqBody) => {
  return Product.create(reqBody);
};

/**get product list */
const getProductList = async (req, res) => {
  return await Product.find().populate('category');
  // return Product.find({$or:[{stock:0}]}).populate('category');
};

/** Get product Id*/
const getproductId = async (productId) => {
  return Product.findById(productId);
};

/** delete product delete*/
const deleteProduct = async (productId) => {
  return Product.findByIdAndDelete(productId);
};

/** Update product delete*/
const updateproduct = async (productId) => {
  return Product.findByIdAndUpdate(productId);
};

module.exports = {
  createProduct,
  getProductList,
  getproductId,
  deleteProduct,
  updateproduct,
};
