const Joi = require('joi');

/* create cart deatil */
const createCart = {
  body: Joi.object().keys({
    cart_status : Joi.string().required().trim(),
    quantity: Joi.number().integer().required()
  }),
};
module.exports = {
    createCart
}