const { Cart } = require("../models");

/** Create cart*/
const createCart = async (reqBody) => {
  return Cart.create(reqBody);
};

/**Get Cart List */
const getCartList = async (req, res) => {
  return Cart.find().populate('user','product');
};
module.exports = {
    createCart,
    getCartList,
};
