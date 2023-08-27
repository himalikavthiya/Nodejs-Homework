const { Product } = require("../models");

/** Create Product*/

const createProduct = async (reqBody) => {
  return Product.create(reqBody);
};

/**get product list */
const getProductList = async (req, res) => {
  return Product.find();
};

module.exports = {
  createProduct,
  getProductList
};
