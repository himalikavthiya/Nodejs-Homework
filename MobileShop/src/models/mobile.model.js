const mongoose = require("mongoose");

const mobileShopSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      trim: true,
    },
    model: {
      type: String,
      trim: true,
    },
    displaySize: {
      type: String,
    },
    processor: {
      type: String,
      trim:true
    },
    storage: {
      type: String,
    },
    cameraResolution: {
      type: String,
      trim: true,
    },
    operatingSystem: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
    },
    releaseDate: {
      type: Date,
      default: Date.now,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Mobile = mongoose.model("mobileshop", mobileShopSchema);

module.exports = Mobile;
