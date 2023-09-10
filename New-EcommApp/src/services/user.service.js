const { user } = require("../models");

/**create user details */
const createUser = async (reqbody) => {
  return user.create(reqbody);
};

/**Get user List */
const getUser = async (req, res) => {
  return user.find();
};

/* user data by id */
const getUserId = async (userId) => {
  return user.findById(userId);
};

/**Delete user Id */
const deleteUser = async (userId) => {
  return user.findByIdAndDelete(userId);
};

/**update user detail*/
const updateUser = async (userId) => {
  return user.findByIdAndUpdate(userId);
};

module.exports = {
  createUser,
  getUser,
  getUserId,
  deleteUser,
  updateUser,
};
