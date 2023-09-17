const express = require("express");
const { productController } = require("../../controllers");
// const  validate  = require("../../middlewares/validate");
// const { productValidation } = require("../../validations");
// const {upload}=require('../../middlewares/upload');

const router = express.Router();

/*create product*/
router.post("/create-product",
// upload.single("product_image"),
// validate(productValidation.createProduct),
productController.createProduct);

/* Get product list */
router.get('/list-product',
productController.getProductList);

/**delete product List */
router.delete("/delete-product/:productId", productController.deleteProduct);

/**upadte product List */
router.put("/update-product/:productId",productController.updateProduct);

module.exports = router;
