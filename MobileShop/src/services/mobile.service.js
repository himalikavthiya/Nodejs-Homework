const { Mobile } = require("../models");

/**create mobile data */
const createMobile = async (reqBody) => {
  return Mobile.create(reqBody);
};

/**Get Mobile data */
const getMobile = async (req, res) => {
  return Mobile.find();
};

/**Get mobile Id */
const getMobileId = async (mobileId) => {
   return Mobile.findById(mobileId);
};

/**Delete Mobile data */
const deleteMobile = async (mobileId) => {
  return Mobile.findByIdAndDelete(mobileId);
};

/**update Mobile data */
const updateMobile = async (mobileId, updateBody) => {
  return Mobile.findByIdAndUpdate(mobileId, { $set: updateBody });
};

/**update Mobile data  status*/
const manageProductStatus = async (mobileId) => {
  const mobileExist = await getMobileId(mobileId);
  if (!mobileExist) {
    throw new Error("Mobile not found!");
  }
  return Mobile.findByIdAndUpdate(
    { _id: mobileId },
    { $set: { is_active: !mobileExist.is_active } },
    { new: true }
  );
};

module.exports = {
  createMobile,
  getMobile,
  getMobileId,
  deleteMobile,
  updateMobile,
  manageProductStatus,
};
