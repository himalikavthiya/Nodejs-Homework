const { Category } = require("../models");

/** Create Category*/
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

/**Get Category List */
const getCategoryList = async (req, res) => {
  return Category.find({$or:[{is_active:true}]});
};

/** Get Category Id*/
const getCategoryId = async (categoryId) => {
  return Category.findById(categoryId);
};

/** delete product delete*/
const deleteProduct = async (categoryId) => {
  return Category.findByIdAndDelete(categoryId);
};

/** Update product delete*/
const updateproduct = async (productId) => {
  return Category.findByIdAndUpdate(productId);
};

module.exports = {
  createCategory,
  getCategoryList,
  getCategoryId,
  deleteProduct,
  updateproduct
};
