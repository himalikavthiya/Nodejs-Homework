const { Payment } = require("../models");

/** Create Payment*/
const createPayment = async (reqBody) => {
  return Payment.create(reqBody);
};

/**get payment list */
const getPaymentList = async (req, res) => {
  return Payment.find();
};



module.exports = {
  createPayment,
  getPaymentList,
};
