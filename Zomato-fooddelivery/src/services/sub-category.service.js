const { subCategory } = require("../models");

/**create subCategory  */
const createSubCategory = async (reqbody) => {
  return subCategory.create(reqbody);
};

/**Get subCategory List */
const getSubCategory = async (req, res) => {
  return subCategory.find().populate('category');
};

/* subCategory data by id */
const getSubCategoryId = async (subCategoryId) => {
  return subCategory.findById(subCategoryId);
};

/**Delete subCategory Id */
const deleteSubCategory = async (subCategoryId) => {
  return subCategory.findByIdAndDelete(subCategoryId);
};

/**update subCategory detail*/
const updataSubCategory = async (subCategoryId) => {
  return subCategory.findByIdAndUpdate(subCategoryId);
};

module.exports = {
  createSubCategory,
  getSubCategory,
  getSubCategoryId,
  deleteSubCategory,
  updataSubCategory,
};
