const { mobileService } = require("../services");

/**create mobile data */
const createMobile = async (req, res) => {
  try {
    const reqBody = req.body;
    const mobileExist = await mobileService.createMobile(reqBody);
    res.status(201).json({
      success: true,
      message: "Create mobile data successfully!",
      data: mobileExist,
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: error.message,
    });
  }
};

/**get Mobile List */
const getMobileList = async (req, res) => {
  try {
    const getmobile = await mobileService.getMobile(req, res);
    res.status(200).json({
      success: true,
      message: "Get mobile data successfully!",
      data: getmobile,
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: error.message,
    });
  }
};

/**Delete Mobile data id */
const deleteMobile = async (req, res) => {
  try {
    const mobileId = req.params.mobileId;
    const mobileExists = await mobileService.getMobileId(mobileId);
    if (!mobileExists) {
      throw new Error("Mobile data not found");
    }
    await mobileService.deleteMobile(mobileId);
    res.status(200).json({
      success: true,
      message: "mobile Id delete succesfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Update Mobile data By id */
const updateMobile = async (req, res) => {
  try {
    const mobileId = req.params.mobileId;
    const mobileExists = await mobileService.getMobileId(mobileId);
    if (!mobileExists) {
      throw new Error("Mobile data not found");
    }
    await mobileService.updateMobile(mobileId, req.body);
    res.status(200).json({
      success: true,
      message: "mobile Id Update succesfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Update Mobile data status id */
const changeMobilestatus = async (req, res) => {
  try {
    const mobileId = req.params.mobileId;
    const mobileExists = await mobileService.getMobileId(mobileId);

    if (mobileExists.is_active == true) {
      throw new Error(
        await mobileService.mobileStatus(mobileExists, {
          $set: {
            is_active: false,
          },
        })
      );
    } else {
      throw new Error(
        await mobileService.mobileStatus(mobileExists, {
          $set: {
            is_active: true,
          },
        })
      );
    }
    

    res.status(200).json({
      success: true,
      message: "mobile Id Update succesfully!",
      is_active: `${mobileExists.is_active}`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createMobile,
  getMobileList,
  deleteMobile,
  updateMobile,
  changeMobilestatus,
};
