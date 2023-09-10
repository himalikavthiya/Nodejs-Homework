const { subCategoryService } = require("../services");

/**create subCategory details */
const createsubCategory = async (req, res) => {
  try {
    const reqBody = req.body;
    const subCategory = await subCategoryService.createSubCategory(reqBody);

    res.status(201).json({
      success: true,
      message: "subCategory create succesfully !",
      data: {subCategory}
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**Get subCategory details */
const getsubCategory = async (req, res) => {
  try {
    const subCategory = await subCategoryService.getSubCategory(req, res);

    res.status(200).json({
      success: true,
      message: "subCategory Detail list succesfully !",
      data: subCategory,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**delete subCategory details */
const deletesubCategory = async (req, res) => {
  try {
    const subCategoryId = req.params.subCategoryId;
    const subCategoryEx = await subCategoryService.getSubCategoryId(subCategoryId);
    if (!subCategoryEx) {
      throw new Error("subCategory Id not Found");
    }
    await subCategoryService.deleteSubCategory(subCategoryId);
    res.status(200).json({
      success: true,
      message: "Delete subCategory succesfully !",
      data:{subCategoryEx}
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**update subCategory details */
const updatesubCategory = async (req, res) => {
  try {
    const subCategoryId = req.params.subCategoryId;
    const subCategoryEx = await subCategoryService.getSubCategoryId(subCategoryId);
    if (!subCategoryEx) {
      throw new Error("subCategory Id not Found");
    }
    await subCategoryService.updataSubCategory(subCategoryId,req.body);
    res.status(200).json({
      success: true,
      message: "Update subCategory succesfully !",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createsubCategory,
  getsubCategory,
  deletesubCategory,
  updatesubCategory
};
