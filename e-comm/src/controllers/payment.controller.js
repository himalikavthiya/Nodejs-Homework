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

/**delete payment List */
const deletePayment = async (req, res) => {
  try {
    const paymentId = req.params.paymentId;
    const paymentEx = await paymentService.getPaymentId(paymentId);
    if (!paymentEx) {
      throw new Error("payment Detail not found");
    }
 await paymentService.deletePayment(paymentId);
    res.status(200).json({
      success: true,
      message: "payment deleted",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**Update payment data By id */
const updatePayment = async (req, res) => {
  try {
    const paymentId = req.params.paymentId;
    const paymentEx = await paymentService.getPaymentId(paymentId);
    if (!paymentEx) {
      throw new Error("payment data not found");
    }

    await paymentService.updatePayment(paymentId, req.body);
    res.status(200).json({
      success: true,
      message: "payment details Update succesfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createPayment,
   getPaymentList,
   deletePayment,
   updatePayment
  };
