const { Order } = require("../models");

/** Create order*/
const createOrder = async (reqBody) => {
  return Order.create(reqBody);
};

/**get Order list */
const getOrderList = async (req, res) => {
  return Order.find().populate('user');
};

module.exports = {
    createOrder,
    getOrderList
};
