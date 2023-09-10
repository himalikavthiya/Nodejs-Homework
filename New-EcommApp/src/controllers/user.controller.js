const { userService } = require("../services");

/**create user details */
const createUserDetail = async (req, res) => {
  try {
    const reqBody = req.body;
    const user = await userService.createUser(reqBody);

    res.status(201).json({
      success: true,
      message: "User Create succesfully !",
      data: user,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
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

/**delete user details */
const deleteUserDetail = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await userService.getUserId(userId);
    if (!user) {
      throw new Error("User not Found");
    }
    await userService.deleteUser(userId);
    res.status(200).json({
      success: true,
      message: "Delete User succesfully !",
      data:user
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**update user details */
const updateUserDetail = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await userService.getUserId(userId);
    if (!user) {
      throw new Error("User not Found");
    }
    await userService.updateUser(userId,req.body);
    res.status(200).json({
      success: true,
      message: "Update User succesfully !",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createUserDetail,
  getUserDetail,
  deleteUserDetail,
  updateUserDetail
};
