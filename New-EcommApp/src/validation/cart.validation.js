const Joi = require("joi");

/* create cart */
const createCart = {
  body: Joi.object().keys({
    user: Joi.string().required().trim(),
    product: Joi.string().required().trim(),
    quantity: Joi.number().required()
  }),
};
module.exports = {
  createCart,
};
