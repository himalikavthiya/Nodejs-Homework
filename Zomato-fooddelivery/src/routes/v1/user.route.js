const express = require("express");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { userValidation } = require("../../validation");
const auth = require("../../middlewares/auth");

const router = express.Router();

/**create User */
router.post(
  "/create-user",
  validate(userValidation.createUser),
  auth(),
  userController.createUserDetail
);

/**Get User List */
router.get("/listUser", userController.getUserDetail);

/**delete User List */
router.delete("/deleteUser/:userId", userController.deleteUserDetail);

/**Update User List */
router.put("/updateUser/:userId", userController.updateUserDetail);

module.exports = router;
