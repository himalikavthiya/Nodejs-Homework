const Joi = require("joi");

/* create sub child category */
const createSubChildCate = {
  body: Joi.object().keys({
    subchildcat_name: Joi.string().required().trim(),
    subcategory: Joi.string().required().trim(),
  }),
};

module.exports = {
  createSubChildCate,
};
