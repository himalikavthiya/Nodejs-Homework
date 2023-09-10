const express = require("express");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const subCategoryRoute = require("./sub-category.route");
const subChildCateRoute = require("./sub-child-category.route");
const productRoute = require("./product.route");
const orderRoute = require("./order.route");
const cartRoute = require("./cart.route");

const router = express.Router();
router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/subCategory", subCategoryRoute);
router.use("/subChildCate", subChildCateRoute);
router.use("/product", productRoute);
router.use("/order", orderRoute);
router.use("/cart", cartRoute);

module.exports = router;
