const { orderService } = require("../services");

/**create order details */
const createOrder = async (req, res) => {
  try {
    const reqBody = req.body;
    const order = await orderService.createOrder(reqBody);

    res.status(201).json({
      success: true,
      message: "order create succesfully !",
      data: { order },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**Get order details List*/
const getOrderList = async (req, res) => {
  try {
    const order = await orderService.getOrder(req, res);

    res.status(200).json({
      success: true,
      message: "Order Detail list succesfully !",
      data: order,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**delete order details */
const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const orderEx = await orderService.getOrderId(orderId);
    if (!orderEx) {
      throw new Error("order Id not Found");
    }

    await orderService.deleteOrder(orderId);

    res.status(200).json({
      success: true,
      message: "Delete order succesfully !",
      data: { orderEx },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**update order details */
const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const orderEx = await orderService.getOrderId(orderId);
    if (!orderEx) {
      throw new Error("order Id not Found");
    }

    await orderService.updataOrder(orderId, req.body);

    res.status(200).json({
      success: true,
      message: "Update order succesfully !",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createOrder,
  getOrderList,
  deleteOrder,
  updateOrder,
};
