const { order } = require("../models");

/**create order  */
const createOrder = async (reqbody) => {
  return order.create(reqbody);
};

/**Get order List */
const getOrder = async (req, res) => {
  return order.find().populate("user").populate("card");
};

/* order data by ID */
const getOrderId = async (orderId) => {
  return order.findById(orderId);
};

/**Delete order Id */
const deleteOrder = async (orderId) => {
  return order.findByIdAndDelete(orderId);
};

module.exports = {
  createOrder,
  getOrder,
  getOrderId,
  deleteOrder

};
