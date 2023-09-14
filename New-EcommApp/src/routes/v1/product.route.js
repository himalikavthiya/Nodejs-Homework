const express = require("express");
const { productController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { productValidation } = require("../../validation");
const { upload } = require("../../middlewares/upload");

const router = express.Router();

/**create product */
router.post(
  "/createproduct",
  auth(),
  upload.single("product_img"),
  validate(productValidation.createProduct),
  productController.createProduct
);

/**Get product List */
router.get("/listproduct", productController.getProduct);

/**delete product Id */
router.delete("/deleteproduct/:productId", productController.deleteProduct);

/**Update product Id */
router.put("/updateproduct/:productId", productController.updateProduct);

module.exports = router;
