const { subChildCategory } = require("../models");

/**create sub Child Category  */
const createsubChildCate = async (reqbody) => {
  return subChildCategory.create(reqbody);
};

/**Get sub Child Category List */
const getsubChildCate = async (req, res) => {
  return subChildCategory.find().populate('subcategory');
};

/* sub Child Category data by id */
const getsubChildCateId = async (subChildCateId) => {
  return subChildCategory.findById(subChildCateId);
};

/**Delete sub Child Category Id */
const deletesubChildCate = async (subChildCateId) => {
  return subChildCategory.findByIdAndDelete(subChildCateId);
};

/**update sub Child Category detail*/
const updatasubChildCate = async (subChildCateId) => {
  return subChildCategory.findByIdAndUpdate(subChildCateId);
};

module.exports = {
  createsubChildCate,
  getsubChildCate,
  getsubChildCateId,
  deletesubChildCate,
  updatasubChildCate,
};
