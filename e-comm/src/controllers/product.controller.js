const { productService,categoryService } = require("../services");

/** create product */
const createProduct = async (req, res) => {
  try {
    const reqBody = req.body;
    const product = await productService.createProduct(reqBody);

    if (!product) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Create Product successfully!",
      data: { product },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**get product List */
const getProductList = async (req, res) => {
  try {
    const getCategory = await categoryService.getCategoryList(req, res);
    const getProduct = await productService.getProductList(req, res);

    res.status(200).json({
      success: true,
      message: "Get Category and Product list successfully!",
      data: { getCategory, getProduct },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createProduct,
  getProductList,
};
