const express = require("express");
const { orderController } = require("../../controllers");
const  validate  = require("../../middlewares/validate");
const { orderValidation } = require("../../validations");


const router = express.Router();

/*create order*/
router.post("/create-order",
validate(orderValidation.createOrder),
orderController.createorder
);

/* Get order list */
router.get('/list-order',
orderController.getOrderList);




module.exports = router;
