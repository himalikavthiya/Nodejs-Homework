const Joi = require('joi');

/* create product */
const createProduct = {
  body: Joi.object().keys({
    product_name: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    product_img:Joi.string().allow(),
    price: Joi.number().required(),
    category: Joi.string().required().trim(),
    subcategory: Joi.string().required().trim(),
    subchildcate: Joi.string().required().trim()
  }),
};
module.exports = {
    createProduct
}