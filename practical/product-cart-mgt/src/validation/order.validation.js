const Joi = require("joi");

/* create order */
const createOrder = {
  body: Joi.object().keys({
    user: Joi.string().required().trim(),
    product: Joi.string().required().trim(),
    totalprice: Joi.number().required()
  }),
};
module.exports = {
  createOrder,
};
