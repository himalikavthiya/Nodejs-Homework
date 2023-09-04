const { User } = require("../models");

/** Create user */
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

/** Get user list*/
const getUserList = async (req, res) => {
  return User.find();
};

/** Get user Id*/
const getUserId = async (userId) => {
  return User.findById(userId);
};

/** delete user delete*/
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};

/** Update user delete*/
const updateUser = async (userId) => {
  return User.findByIdAndUpdate(userId);
};

module.exports = {
  createUser,
  getUserList,
  getUserId,
  deleteUser,
  updateUser
};
