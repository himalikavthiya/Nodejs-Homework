const { product } = require("../models");

/**create product  */
const createProduct = async (reqbody) => {
  return product.create(reqbody);
};

/**Get product List */
const getProduct = async (req, res) => {
  return await product
    .find()
    .populate("category","category_name")
    .populate("subcategory","subcategory_name")
    .populate("subchildcate","subchildcat_name");
};

/* product data by ID */
const getProductId = async (productId) => {
  return product.findById(productId);
};

/**Delete product Id */
const deleteProduct = async (productId) => {
  return product.findByIdAndDelete(productId);
};

/**update product detail*/
const updataProduct = async (productId) => {
  return product.findByIdAndUpdate(productId);
};

module.exports = {
  createProduct,
  getProduct,
  getProductId,
  deleteProduct,
  updataProduct,
};
