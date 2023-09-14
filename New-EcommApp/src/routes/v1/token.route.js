const express = require("express");
const { tokenController } = require("../../controllers");

const router = express.Router();

/**create Token router */
router.post("/create-token", tokenController.generateToken);

/**get list token */
router.get("/verify-token", tokenController.verifyToken);


module.exports = router;
