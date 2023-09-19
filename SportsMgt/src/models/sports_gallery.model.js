const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    sports_category: {
      type: mongoose.Types.ObjectId,
      ref: "sports_category",
    },
    sports_img: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Gallery = mongoose.model("sport_gellery", gallerySchema);
module.exports = Gellery;
