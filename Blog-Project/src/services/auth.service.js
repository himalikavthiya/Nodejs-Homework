const { User } = require("../models");

/**Create User */
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

/**list of single data find*/
const getByEmail = async (reqBody) => {
  return User.findOne({ email: reqBody.email });
};

module.exports = {
  createUser,
  getByEmail,
};
