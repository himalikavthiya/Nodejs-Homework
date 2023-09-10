const { productService } = require("../services");

/**create product details */
const createProduct = async (req, res) => {
  try {
    const reqBody = req.body;
    const product = await productService.createProduct(reqBody);

    res.status(201).json({
      success: true,
      message: "product create succesfully !",
      data: {product}
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**Get product details */
const getProduct = async (req, res) => {
  try {
    const product = await productService.getProduct(req, res);

    res.status(200).json({
      success: true,
      message: "product Detail list succesfully !",
      data: product,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**delete product details */
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productEx = await productService.getproductId(productId);
    if (!productEx) {
      throw new Error("product Id not Found");
    }
    await productService.deleteproduct(productId);
    res.status(200).json({
      success: true,
      message: "Delete product succesfully !",
      data:{productEx}
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**update product details */
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productEx = await productService.getproductId(productId);
    if (!productEx) {
      throw new Error("product Id not Found");
    }
    await productService.updataproduct(productId,req.body);
    res.status(200).json({
      success: true,
      message: "Update product succesfully !",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct
};
