const { cartService } = require("../services");

/**create cart details */
const createCart = async (req, res) => {
  try {
    const reqBody = req.body;
    const cartdetail = await cartService.createCart(reqBody);

    res.status(201).json({
      success: true,
      message: "cart create succesfully !",
      data: { cartdetail }
    });

  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**Get cart details List*/
const getCartList = async (req, res) => {
  try {
    const cart = await cartService.getCart(req, res);

    res.status(200).json({
      success: true,
      message: "cart Detail list succesfully !",
      data: {cart}
    });

  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**delete cart details */
const deleteCart = async (req, res) => {
  try {
    const cartId = req.params.cartId;
    const cartEx = await cartService.getCartId(cartId);
    if (!cartEx) {
      throw new Error("cart Id not Found");
    }

    await cartService.deleteCart(cartId);

    res.status(200).json({
      success: true,
      message: "Delete cart succesfully !",
      data: { cartEx },
    });

  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**update cart details */
const updateCart = async (req, res) => {
  try {
    const cartId = req.params.cartId;
    const cartEx = await cartService.getCartId(cartId);
    if (!cartEx) {
      throw new Error("cart Id not Found");
    }

    await cartService.deleteCart(cartId, req.body);

    res.status(200).json({
      success: true,
      message: "Update cart succesfully !",
    });

  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createCart,
  getCartList,
  deleteCart,
  updateCart,
};
