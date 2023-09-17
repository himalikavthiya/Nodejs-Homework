const Joi = require('joi');

/* create product */
const createProduct = {
  body: Joi.object().keys({
    product_name: Joi.string().required().trim(),
    product_price: Joi.string().required().trim(),
    category: Joi.string().required().trim(),
    product_image:Joi.string().allow("")
  }),
};
module.exports = {
    createProduct
}