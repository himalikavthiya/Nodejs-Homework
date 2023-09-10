const express = require("express");
const { orderController } = require("../../controllers");
const  validate  = require("../../middlewares/validate");
const { orderValidation } = require("../../validation");

const router = express.Router();

/**create Order data */
router.post(
  "/createorder",
  validate(orderValidation.createOrder),
  orderController.createOrder
);

/**Get Order data List */
router.get("/listorder", orderController.getOrderList);

/**delete Order Id */
router.delete("/deleteorder/:orderId", orderController.deleteOrder);

/**Update Order data by Id */
router.put("/updateorder/:orderId", orderController.updateOrder);

module.exports = router;
