const { Address } = require("../models");

/** Create Address*/
const createAddress = async (reqBody) => {
  return Address.create(reqBody);
};

/**Get Cart Address */
const getAddress= async (req, res) => {
  return Address.find().populate('user');
};
module.exports = {
    createAddress,
    getAddress,
};
