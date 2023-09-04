const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/*create user*/
router.post(
  "/create-user",
  validate(userValidation.createUser),
  userController.createUser
);

/**Get user List */
router.get(
  "/list",
  validate(userValidation.getUserList),
  userController.getUserList
);

/**delete user List */
router.delete("/deleteuser/:userId", userController.deleteUser);

/**upadte user List */
router.put("/updateuser/:userId", userController.updateUser);

module.exports = router;
