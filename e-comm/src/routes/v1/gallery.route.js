const express = require("express");
const { galleryController } = require("../../controllers");
const { upload } = require("../../middlewares/upload");

const router = express.Router();

/**create gallery */
router.post("/create-gallery",
upload.single("gallery_image"),
 galleryController.createGallery);

 /**get images in gallery */
 router.get('/get-images',galleryController.getGalleryimage);

module.exports = router;
