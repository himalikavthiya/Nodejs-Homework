const express = require("express");
const { subChildCateController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { subChildCateValidation } = require("../../validation");
const router = express.Router();

/**create subChildCate */
router.post(
  "/createsubChildCate",
  validate(subChildCateValidation.createSubChildCate),
  subChildCateController.createsubChildCate
);

/**Get subChildCate List */
router.get("/listsubChildCate", subChildCateController.getsubChildCate);

/**delete subChildCate Id */
router.delete(
  "/deletesubChildCate/:subChildCateId",
  subChildCateController.deletesubChildCate
);

/**Update subChildCate Id */
router.put(
  "/updatesubChildCate/:subChildCateId",
  subChildCateController.updatesubChildCate
);

module.exports = router;
