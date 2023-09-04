const express = require("express");
const { cartController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { cartValidation } = require("../../validations");

const router = express.Router();

/*create cart*/
router.post("/create-cart",
validate(cartValidation.createCart),
cartController.createCart
);

/* Get Cart list */
router.get('/list-cart',
cartController.getCartList);


module.exports = router;
