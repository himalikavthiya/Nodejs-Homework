const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    category_name: {
      type: String,
      trim: true,
    },
    sport_name: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Sports_Category = mongoose.model("sports_category", categorySchema);
module.exports = Sports_Category;
