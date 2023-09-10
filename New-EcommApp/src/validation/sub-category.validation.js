const Joi = require("joi");

/* create sub Category */
const createSubCategory = {
  body: Joi.object().keys({
    subcategory_name: Joi.string().required().trim(),
    category: Joi.string().required().trim(),
  }),
};

module.exports = {
  createSubCategory,
};
