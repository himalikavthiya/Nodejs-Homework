const express = require("express");
const { paymentController } = require("../../controllers");
const  validate  = require("../../middlewares/validate");
const { paymentValidation } = require("../../validations");

const router = express.Router();

/*create Payment*/
router.post("/create-payment",
validate(paymentValidation.createPayment),
paymentController.createPayment
);

/* Get Payment list */
router.get('/list-payment',
paymentController.getPaymentList
);


module.exports = router;
