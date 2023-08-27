const { userService,categoryService,productService} = require("../services");

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

module.exports = { createUser, getUserList };
