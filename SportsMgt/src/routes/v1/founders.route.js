const express = require("express");
const { foundersController } = require("../../controllers");
const { foundersValidation } = require("../../validations");
const validate = require("../../middlewares/validate");

var router = express.Router();

/**Craete founder data */
router.post("/createfounders",
validate(foundersValidation.createFounders),
    foundersController.createFounders);

/** Get Founder list */
router.get("/founderlist", foundersController.getFoundersList);

/** founder details update by id */
router.put("/update-details/:founderId", foundersController.updateDetails);

/** Delete Founder */
router.delete("/delete-founder/:founderId", foundersController.deleteFounders);

module.exports = router;
