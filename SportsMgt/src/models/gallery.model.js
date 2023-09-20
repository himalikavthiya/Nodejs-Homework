const mongoose = require("mongoose");
const BASE_URL="http://localhost:8000/";
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
    toJSON: {
      transform: function (doc, data) {
        if (data?.Images) {
          data.Images = `${BASE_URL}images/${data.Images}`;
        }
      },
    },
  }
);

const Gallery = mongoose.model("gellery", gallerySchema);
module.exports = Gallery;
