const express = require("express");
const { productController } = require("../../controllers");

const router = express.Router();

/**create product */
router.post(
  "/createproduct",
  productController.createProduct
);

/**Get product List */
router.get("/listproduct", productController.getProduct);



module.exports = router;
