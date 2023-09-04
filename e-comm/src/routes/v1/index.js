const express = require("express");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const productRoute = require("./product.route");
const orderRoute = require("./order.route");
const cartRoute = require("./cart.route");
const paymentRoute = require("./payment.route");
const addressRoute = require("./address.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/product", productRoute);
router.use("/order", orderRoute);
router.use("/cart", cartRoute);
router.use("/payment",paymentRoute);
router.use("/address",addressRoute);

module.exports = router;
