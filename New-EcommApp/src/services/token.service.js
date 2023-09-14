const jwt=require('jsonwebtoken');
const { token } = require("../models");
const config = require("../config/config");


/**create token*/
const generateToken = async (reqBody) => {
  let payload = {
    ...reqBody,
  };
  return jwt.sign(payload, config.jwt.secret_key);
};

/**save Tokenin our Database */
const saveToken = async (reqBody) => {
   return token.findOneAndUpdate(
    { user: reqBody.user },
    {
      $set: {
        ...reqBody
      },
    },
    { new: true, upsert: true }

  );
};

module.exports = {
  generateToken,
  saveToken,
};
