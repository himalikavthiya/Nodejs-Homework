const { Founders } = require("../models");

/**Create Founders */
const createfounder = async (reqBody) => {
  return Founders.create(reqBody);
};

/** Get founder list */
const getfounderList = async (req, res) => {
  return Founders.find();
};

/** Get founder details by id*/
const getfounderById = async (founderId) => {
  return Founders.findById(founderId);
};

/** founder details update by id */
const updateDetails = async (founderId, updateBody) => {
  return Founders.findByIdAndUpdate(founderId, { $set: updateBody });
};

/** Delete founder */
const deletefounder = async (founderId) => {
  return Founders.findByIdAndDelete(founderId);
};

module.exports = {
  createfounder,
  getfounderList,
  getfounderById,
  updateDetails,
  deletefounder,
};
