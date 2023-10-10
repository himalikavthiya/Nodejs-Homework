const { userService } = require("../services");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();


/**create user details */
const createUserDetail = async (req, res) => {
  try {
    const reqBody = req.body;
    const user = await userService.createUser(reqBody);

    let payload = {
      email: reqBody.email,
      role: reqBody.role,
      exp: moment().add(1, "days").unix(),
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY);

    res.status(201).json({
      success: true,
      message: "User Create succesfully !",
      data: user,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

 /**user login */
 const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await authService.findUserByEmail(email);

    if (!findUser) throw Error("User not found", 403);

    const successPass = await bcrypt.compare(password, findUser.password);
    if (!successPass) throw Error("Incorrect password");

    let payload = {
      email,
      role: findUser.role,
      exp: moment().add(1, "days").unix(),
    };

    let token;
    if (findUser && successPass) {
      token = await jwt.sign(payload, process.env.JWT_SECRET_KEY);
    }
    res.status(200).json({
      success: true,
      message: `${findUser.role} Login successfully!`,
      data: token,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/**Get user details */
const getUserDetail = async (req, res) => {
  try {
    const user = await userService.getUser(req, res);

    res.status(201).json({
      // success: true,
      // message: "User Detail list succesfully !",
      data: user,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createUserDetail,
  getUserDetail,
  login
};
