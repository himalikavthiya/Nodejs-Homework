const { Payment } = require("../models");

/** Create Payment*/
const createPayment = async (reqBody) => {
  return Payment.create(reqBody);
};

/**get payment list */
const getPaymentList = async (req, res) => {
  return Payment.find().populate('order');
};

/** Get payment Id*/
const getPaymentId = async (paymentId) => {
  return Payment.findById(paymentId);
};

/** delete payment delete*/
const deleteProduct = async (paymentId) => {
  return Payment.findByIdAndDelete(paymentId);
};

/** Update payment delete*/
const updatePayment = async (paymentId) => {
  return Payment.findByIdAndUpdate(paymentId);
};


module.exports = {
  createPayment,
  getPaymentList,
  getPaymentId,
  deleteProduct,
  updatePayment
};
