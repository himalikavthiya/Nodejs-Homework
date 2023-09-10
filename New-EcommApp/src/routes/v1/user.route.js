const express = require("express");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { userValidation } = require("../../validation");

const router = express.Router();

/**create User */
router.post(
  "/createUser",
  validate(userValidation.createUser),
  userController.createUserDetail
);

/**Get User List */
router.get("/listUser", userController.getUserDetail);

/**delete User List */
router.delete("/deleteUser/:userId", userController.deleteUserDetail);

/**Update User List */
router.put("/updateUser/:userId", userController.updateUserDetail);

module.exports = router;
