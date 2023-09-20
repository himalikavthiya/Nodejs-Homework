const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    Images: {
      type: String,
      trim: true,
    },
    tournamnets: {
        type:mongoose.Types.ObjectId,
        ref:"tournamnets"
    },
  },
  {
    timestamps: true,
  }
);

const Gallery = mongoose.model("gellery", gallerySchema);
module.exports = Gallery;
