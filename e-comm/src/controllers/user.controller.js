const { userService, categoryService, productService } = require("../services");

/** create user */
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;
    const user = await userService.createUser(reqBody);
    if (!user) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "User create successfully!",
      data: user,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get user list */
const getUserList = async (req, res) => {
  try {
    const getUser = await userService.getUserList(req, res);
    const getCategory = await categoryService.getCategoryList(req, res);
    const getProduct = await productService.getProductList(req, res);

    res.status(200).json({
      success: true,
      message: "Get user list successfully!",
      data: { getUser, getCategory, getProduct },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**Delete user list */
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const User = await userService.getUserId(userId);
    if (!User) {
      throw new Error("User id not found");
    }
    await userService.deleteUser(userId);
    res.status(200).json({
      success: true,
      message: "user delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**Update User data By id */
const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const UserExi = await userService.getUserId(userId);
    if (!UserExi) {
      throw new Error("User data not found");
    }
    await userService.updateUser(userId, req.body);
    res.status(200).json({
      success: true,
      message: "User details Update succesfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createUser,
  getUserList,
  deleteUser,
  updateUser
};
