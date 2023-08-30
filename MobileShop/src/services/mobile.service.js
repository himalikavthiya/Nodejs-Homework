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
const updateMobile = async (mobileId,updateBody) => {
    return Mobile.findByIdAndUpdate(mobileId,{$set:updateBody});
  };

  /**update Mobile data  status*/
const mobileStatus = async (mobileEx) => {
    return Mobile.findByIdAndUpdate(mobileEx,{$set:{is_active:false}});
  };

  module.exports = {
  createMobile,
  getMobile,
  getMobileId,
  deleteMobile,
  updateMobile,
  mobileStatus
};
