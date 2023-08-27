const { cartService } = require("../services");


/** create Cart */
const createCart = async (req, res) => {
  try {
    const reqBody = req.body;
    const cart = await cartService.createCart(reqBody);

    res.status(200).json({
      success: true,
      message: "Create cart successfully!",
      data: { cart }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**get cart List */
const getCartList = async (req, res) => {
  try {
    const getCart = await cartService.getCartList(req, res);
    const getUser = await userService.getUserList(req, res);//Multiple service are use

      res.status(200).json({
      success: true,
      message: "Get Cart and User list successfully!",
      data: { getCart,getUser },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createCart,
  getCartList
};
