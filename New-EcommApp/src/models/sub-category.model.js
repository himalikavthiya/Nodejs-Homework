const mongoose = require("mongoose");
const subCategorySchema = new mongoose.Schema(
  {
    subcategory_name: {
      type: String,
      trim: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
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

const subCategory = mongoose.model("subcategory", subCategorySchema);

module.exports = subCategory;
