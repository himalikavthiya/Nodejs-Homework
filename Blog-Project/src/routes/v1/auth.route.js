const express = require("express");
const { authController } = require("../../controllers");
const  {authValidator}  = require("../../validators");
const router = express.Router();

/** Sign Up router*/
router.post("/signup",
authValidator.signupValidator,
authController.signUp);

/**Login router */
router.get("/login",authValidator.loginValidator,
authController.login);

module.exports = router;
