const Joi = require('joi');

/* create user */
const createUser = {
  body: Joi.object().keys({
    user_name: Joi.string().required().trim(),
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
  }),
};
module.exports = {
  createUser
}