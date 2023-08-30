const express = require("express");
const { mobileController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { mobileValidation } = require("../../validations");

const router = express.Router();

/**create mobileshop data */
router.post(
  "/createMobile",
  validate(mobileValidation.createMobile),
  mobileController.createMobile
);

/**Get Mobileshop data*/
router.get('/listMobile',mobileController.getMobileList);

/**Delete Mobileshop data*/
router.delete('/deleteMobile/:mobileId',mobileController.deleteMobile);

/**Update Mobileshop data*/
router.put('/updateMobile/:mobileId',mobileController.updateMobile);

/**Update Mobileshop data status*/
router.put('/mobilestatus/:mobileId',mobileController.changeMobilestatus);


module.exports = router;
