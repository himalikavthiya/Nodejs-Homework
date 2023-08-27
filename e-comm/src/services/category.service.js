const { Category } = require("../models");

/** Create Category*/
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

/**Get Category List */
const getCategoryList = async (req, res) => {
  return Category.find();
};
module.exports = {
  createCategory,
  getCategoryList,
};
