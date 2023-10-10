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



module.exports = {
  createProduct,
  getProduct

};
