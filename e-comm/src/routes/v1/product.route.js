const express = require("express");
const { productController } = require("../../controllers");
const  validate  = require("../../middlewares/validate");
const { productValidation } = require("../../validations");

const router = express.Router();

/*create product*/
router.post("/create-product",
validate(productValidation.createProduct),
productController.createProduct);

/* Get user list */
router.get('/list-product',
productController.getProductList);


module.exports = router;
