const { User } = require("../models");
const { body } = require("express-validator");
const validatorResult = require("../middlwares/validator");

/** signup validator */
exports.signupValidator = [
  body("firstname")
    .notEmpty()
    .withMessage("firstname is not allowed to be empty"),

  body("lastname")
    .notEmpty()
    .withMessage("lastname is not allowed to be empty"),

  body("email")
    .notEmpty()
    .withMessage("email is not allowed to be empty")
    .isEmail()
    .withMessage("Email must be a valid email")

    /**Check if Email exist */
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email: email });

      if (user) {
        return Promise.reject(new Error("Email already in use"));
      }
    }),

  body("password")
    .notEmpty()
    .withMessage("password is not allowed to be empty")
    .isLength({ min: 6 })
    .withMessage("Password length must be 6 character long"),
  validatorResult,
];

/** login validator*/
exports.loginValidator = [
  body("email")
    .notEmpty()
    .withMessage("Email is not allowed to be empty")
    .isEmail()
    .withMessage("Email must be a valid email"),

  body("password")
    .notEmpty()
    .withMessage("password is not allowed to be empty"),
  validatorResult,
];
