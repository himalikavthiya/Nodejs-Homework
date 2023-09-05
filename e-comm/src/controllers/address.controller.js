const { addressService } = require("../services");

/** create Address */
const createAddress = async (req, res) => {
  try {
    const reqBody = req.body;
    const address = await addressService.createAddress(reqBody);

    res.status(200).json({
      success: true,
      message: "Create Address",
      data: { address },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**get Address List */
const getAddress = async (req, res) =>   {
  try {
    const getAddress = await addressService.getAddress(req, res);

    res.status(200).json({
      success: true,
      message: "Get  user address detail",
      data: { getAddress },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createAddress,
  getAddress,
};
