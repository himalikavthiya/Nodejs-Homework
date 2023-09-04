const express = require("express");
const { addressController } = require("../../controllers");

const router = express.Router();

/*create address*/
router.post("/create-address", addressController.createAddress);

/* Get address list */
router.get("/list-address", addressController.getAddress);

module.exports = router;
