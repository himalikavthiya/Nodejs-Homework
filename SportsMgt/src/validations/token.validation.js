const Joi = require("joi");

/** Create jsonwebroken  */
const generateToken = {
  body: Joi.object({
    players: Joi.string().required().trim(),
  }),
};

module.exports = {
  generateToken,
};
