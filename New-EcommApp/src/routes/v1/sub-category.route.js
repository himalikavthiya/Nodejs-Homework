const express = require("express");
const { subCategoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { subCategoryValidation } = require("../../validation");

const router = express.Router();

/**create subCategory */
router.post(
  "/createSubCategory",
  validate(subCategoryValidation.createSubCategory),
  subCategoryController.createsubCategory
);

/**Get subCategory List */
router.get("/listSubCategory", subCategoryController.getsubCategory);

/**delete subCategory Id */
router.delete(
  "/deleteSubCategory/:subCategoryId",
  subCategoryController.deletesubCategory
);

/**Update subCategory Id */
router.put(
  "/updateSubCategory/:subCategoryId",
  subCategoryController.updatesubCategory
);

module.exports = router;
