const express = require("express");
const { orderController } = require("../../controllers");

const router = express.Router();

/**create Order data */
router.post(
  "/createorder",
  orderController.createOrder
);

/**Get Order data List */
router.get("/listorder",
orderController.getOrderList);

/**delete Order Id */
router.delete("/deleteorder/:orderId", orderController.deleteOrder);

/**send mail */
router.post('/send-mail',orderController.sendMail);
module.exports = router;
