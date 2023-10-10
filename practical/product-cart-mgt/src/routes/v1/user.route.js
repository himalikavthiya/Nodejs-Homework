const express = require("express");
const { userController } = require("../../controllers");

const router = express.Router();

/**create User */
router.post(
  "/create-user",
   userController.createUserDetail
);

/**Get User List */
router.get("/listUser", userController.getUserDetail);



module.exports = router;
