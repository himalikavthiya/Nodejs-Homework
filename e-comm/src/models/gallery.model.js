const mongoose = require("mongoose");
const config = require("../config/config");
/**Create gallery schema */
const gallerySchema = new mongoose.Schema(
  {
    image_name: {
      type: String,
      trim: true,
    },
    gallery_image: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey:false,
    toJSON: {
      transform: function (doc, data) {
        if (data?.gallery_image) {
          data.gallery_image = `${config.base_url}gallery_images/${data.gallery_image}`;
        }
      },
    },
  }
);

const Gallery = mongoose.model("gallery", gallerySchema);

module.exports = Gallery;
