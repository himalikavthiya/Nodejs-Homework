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
      data: { getCategory,getProduct },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**delete product List */
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productEx = await productService.getproductId(productId);
    if (!productEx) {
      throw new Error("product data not found");
    }
 await productService.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**Update Product data By id */
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productEx = await productService.getproductId(productId);
    if (!productEx) {
      throw new Error("product data not found");
    }

    await productService.updateproduct(productId, req.body);
    res.status(200).json({
      success: true,
      message: "product details Update succesfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getProductList,
  deleteProduct,
  updateProduct
};
