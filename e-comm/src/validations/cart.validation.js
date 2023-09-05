const Joi = require('joi');

/* create cart deatil */
const createCart = {
  body: Joi.object().keys({
    cart_status : Joi.string().required().trim(),
    quantity: Joi.number().integer().required(),
    user:Joi.string().required().trim(),
    product:Joi.string().required().trim()
  }),
};
module.exports = {
    createCart
}