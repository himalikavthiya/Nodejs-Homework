const express = require("express");
const { cartController } = require("../../controllers");

const router = express.Router();

/**create cart detail */
router.post(
  "/createCart",
   cartController.createCart
);

/**Get cart List */
router.get("/listCart", cartController.getCartList);

/**delete cart  Id */
router.delete("/deleteCart/:cartId", cartController.deleteCart);

/**Update cart  Id */
router.put("/updateCart/:cartId", cartController.updateCart);

module.exports = router;
