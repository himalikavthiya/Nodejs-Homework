const { categoryService, userService } = require("../services");

/** create user */
const createCategory = async (req, res) => {
  try {
    const reqBody = req.body;
    const category = await categoryService.createCategory(reqBody);

    if (!category) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Create category successfully !",
      data: category,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**Get Category list */
const getCategoryList = async (req, res) => {
  try {
    const getCategory = await categoryService.getCategoryList(req, res);
    const getUser = await userService.getUserList(req, res);
    
    res.status(200).json({
      success: true,
      message: "Get category list successfully!",
      data: { getCategory, getUser },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createCategory,
  getCategoryList,
};
