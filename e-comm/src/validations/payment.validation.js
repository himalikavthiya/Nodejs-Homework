const Joi = require('joi');

/* create Payment */
const createPayment = {
  body: Joi.object().keys({
    paymentMethod: Joi.string().required().trim(),
    transactionId: Joi.number().integer().required(),
    amount: Joi.number().integer().required()
  }),
};
module.exports = {
    createPayment
}