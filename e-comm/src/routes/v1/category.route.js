const express = require("express");
const { categoryController } = require("../../controllers");

const router = express.Router();

/*create category*/
router.post("/create-category", categoryController.createCategory);

/* Get user list */
router.get("/list-category",
  categoryController.getCategoryList
);

module.exports = router;
