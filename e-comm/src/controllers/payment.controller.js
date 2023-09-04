const { paymentService } = require("../services");

/** create Payment */
const createPayment = async (req, res) => {
  try {
    const reqBody = req.body;
    const payment = await paymentService.createPayment(reqBody);

    res.status(200).json({
      success: true,
      message: "Payment detail create successfully!",
      data: payment,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get payment list */
const getPaymentList = async (req, res) => {
  try {
    const paymentDetail = await paymentService.getPaymentList(req, res);

    res.status(200).json({
      success: true,
      message: "Get payment detail successfully",
      data: { paymentDetail },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { createPayment, getPaymentList };
