const express = require("express");
const { cartController } = require("../../controllers");

const router = express.Router();

/*create cart*/
router.post("/create-cart",
cartController.createCart
);

/* Get Cart list */
router.get('/list-cart',
cartController.getCartList);


module.exports = router;
