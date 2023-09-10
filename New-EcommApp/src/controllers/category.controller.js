const { categoryService } = require("../services");

/**create Category details */
const createCategory = async (req, res) => {
  try {
    const reqBody = req.body;
    const category = await categoryService.createCategory(reqBody);

    res.status(201).json({
      success: true,
      message: "Category Create succesfully !",
      data: category,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**Get Category details */
const getCategoryDetail = async (req, res) => {
  try {
    const categorylist = await categoryService.getCategory(req, res);

    res.status(201).json({
      success: true,
      message: "Category Detail list succesfully !",
      data: categorylist,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**delete Category details */
const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const categoryEx = await categoryService.getCategoryId(categoryId);
    if (!categoryEx) {
      throw new Error("Category not Found");
    }
    await categoryService.deleteCategory(categoryId);
    res.status(200).json({
      success: true,
      message: "Delete Category succesfully !",
      data:categoryEx
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**update Category details */
const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const categoryEx = await categoryService.getCategoryId(categoryId);
    if (!categoryEx) {
      throw new Error("Category not Found");
    }
    await categoryService.updateCategory(categoryId,req.body);
    res.status(200).json({
      success: true,
      message: "Update Category succesfully !",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createCategory,
  getCategoryDetail,
  deleteCategory,
  updateCategory
};
