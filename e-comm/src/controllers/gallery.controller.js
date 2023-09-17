const { galleryService } = require("../services");
const fs = require("fs");

/**create gallery */
const createGallery = async (req, res) => {
  try {
    const reqBody = req.body;
    if (req.file) {
      reqBody.gallery_image = req.file.filename;
    } else {
      throw new Error("image required");
    }
    const createGallery = await galleryService.createGallery(reqBody);
    res.status(201).json({
      success: true,
      message: "Gallery image create succssfully!",
      data: createGallery,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Image Not created",
    });
  }
};

/**Get images in gallery */
const getGalleryimage = async (req, res) => {
  try {
    const getimage = await galleryService.getGallery(req, res);

    res.status(201).json({
      success: true,
      message: "Gallery image List succssfully!",
      data: getimage,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Image list Not found",
    });
  }
};

module.exports = {
  createGallery,
  getGalleryimage,
};
