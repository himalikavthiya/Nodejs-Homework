const { Category } = require("../models");

/** Create Category*/
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

/**Get Category List */
const getCategoryList = async (req, res) => {
  return Category.find(
    // {$or:[{is_active:true}]}
    );
};

/** Get Category Id*/
const getCategoryId = async (categoryId) => {
  return Category.findById(categoryId);
};

/** delete Category delete*/
const deleteCategory = async (categoryId) => {
  return Category.findByIdAndDelete(categoryId);
};

/** Update Category delete*/
const updateCategory = async (productId) => {
  return Category.findByIdAndUpdate(productId);
};

module.exports = {
  createCategory,
  getCategoryList,
  getCategoryId,
  deleteCategory,
  updateCategory
};
