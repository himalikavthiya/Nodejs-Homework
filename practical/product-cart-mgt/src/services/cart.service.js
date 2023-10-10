const { cart } = require("../models");

/**create cart  */
const createCart = async (reqbody) => {
  return cart.create(reqbody);
};

/**Get cart List */
const getCart = async (req, res) => {
  return cart
    .find()
    .populate({
      path: "user",
      select: "user_name",
    })
    .populate({
      path: "product",
      select: "product_name",
    });
};

/* cart data by ID */
const getCartId = async (cartId) => {
  return cart.findById(cartId);
};

/**Delete cart Id */
const deleteCart = async (cartId) => {
  return cart.findByIdAndDelete(cartId);
};

/**update cart detail*/
const updataCart = async (cartId) => {
  return cart.findByIdAndUpdate(cartId);
};

module.exports = {
  createCart,
  getCart,
  getCartId,
  deleteCart,
  updataCart,
};
