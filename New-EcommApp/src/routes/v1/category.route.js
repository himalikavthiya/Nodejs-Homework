const express = require("express");
const { categoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { categoryValidation } = require("../../validation");

const router = express.Router();

/**create category */
router.post(
  "/createCategory",
  validate(categoryValidation.createCategory),
  categoryController.createCategory
);

/**Get Category List */
router.get("/listCategory", categoryController.getCategoryDetail);

/**delete Category List */
router.delete("/deleteCategory/:categoryId", categoryController.deleteCategory);

/**Update Category List */
router.put("/updateCategory/:categoryId", categoryController.updateCategory);

module.exports = router;
