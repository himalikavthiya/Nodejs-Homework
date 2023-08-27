const { orderService,productService,userService} = require("../services");

/** create order */
const createorder = async (req, res) => {
  try {
    const reqBody = req.body;
    const order = await orderService.createOrder(reqBody);

    res.status(200).json({
      success: true,
      message: "Create order successfully!",
      data: { order },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**get order List */
const getOrderList = async (req, res) => {
  try {
    const getOrder = await orderService.getOrderList(req, res);
    const getUser = await userService.getUserList(req, res);
    const getProduct = await productService.getProductList(req, res);

      res.status(200).json({
      success: true,
      message: "Get Order list successfully!",
      data: { getOrder,getUser,getProduct },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createorder,
  getOrderList
};
