const { subChildCateService } = require("../services");

/**create subChildCategory details */
const createsubChildCate = async (req, res) => {
  try {
    const reqBody = req.body;
    const subChildCategory = await subChildCateService.createsubChildCate(reqBody);

    res.status(201).json({
      success: true,
      message: "sub Child Category create succesfully !",
      data: {subChildCategory}
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**Get sub Child Category details */
const getsubChildCate = async (req, res) => {
  try {
    const subChildCate = await subChildCateService.getsubChildCate(req, res);

    res.status(200).json({
      success: true,
      message: "subChildCate Detail list succesfully !",
      data: subChildCate,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**delete sub Child Category details */
const deletesubChildCate = async (req, res) => {
  try {
    const subChildCateId = req.params.subChildCateId;
    const subChildCateEx = await subChildCateService.getsubChildCateId(subChildCateId);
    if (!subChildCateEx) {
      throw new Error("subChildCate Id not Found");
    }
    await subChildCateService.deletesubChildCate(subChildCateId);
    res.status(200).json({
      success: true,
      message: "Delete subChildCate succesfully !",
      data:{subChildCateEx}
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**update sub Child Category details */
const updatesubChildCate = async (req, res) => {
  try {
    const subChildCateId = req.params.subChildCateId;
    const subChildCateEx = await subChildCateService.getsubChildCateId(subChildCateId);
    if (!subChildCateEx) {
      throw new Error("subChildCate Id not Found");
    }
    await subChildCateService.updatasubChildCate(subChildCateId,req.body);
    res.status(200).json({
      success: true,
      message: "Update subChildCate succesfully !",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createsubChildCate,
  getsubChildCate,
  deletesubChildCate,
  updatesubChildCate
};
