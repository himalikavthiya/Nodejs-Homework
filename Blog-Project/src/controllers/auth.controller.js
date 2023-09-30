const { authService } = require("../services");
const { generateToken } = require("../validators");
const bcrypt=require('bcrypt');

/**create user Sign up */
const signUp = async (req, res) => {
  const reqBody = req.body;
  const user = await authService.createUser(reqBody);
  if (!user) {
    throw new Error("Please try again or later!");
  }
  if (user) {
    res.status(201).json({
      message: "User SignUp successfully!",
      token: generateToken.createToken(user._id),
      data: user,
    });
  }
};

/**create user Login  */
const login = async (req, res) => {

  const reqBody=req.body;
  const userData = await authService.getByEmail(reqBody.email);

  if (!userData || !(await bcrypt.compare(reqBody.password, userData.password)) ) {
    return res.status(401).json({
      message: "Invalid Password or Email",
    });
  }
  if (userData.isBlocked) {
    return res.status(403).json({
      message: "Your Account has been disabled",
    });
  }
  if (userData) {
    /**create Token */
    const token = generateToken.createToken(userData._id);
    res.status(200).json({
      getToken: token,
      data: userData,
    });
  }


};

module.exports = {
  signUp,
  login,
};
