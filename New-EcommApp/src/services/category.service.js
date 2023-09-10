const { category } = require("../models");

/**create Category  */
const createCategory = async (reqbody) => {
  return category.create(reqbody);
};

/**Get Category List */
const getCategory = async (req, res) => {
  return category.find();
};

/* Category data by id */
const getCategoryId = async (categoryId) => {
  return category.findById(categoryId);
};

/**Delete Category Id */
const deleteCategory = async (categoryId) => {
  return category.findByIdAndDelete(categoryId);
};

/**update Category detail*/
const updateCategory = async (categoryId) => {
  return category.findByIdAndUpdate(categoryId);
};

module.exports = {
  createCategory,
  getCategory,
  getCategoryId,
  deleteCategory,
  updateCategory,
};
