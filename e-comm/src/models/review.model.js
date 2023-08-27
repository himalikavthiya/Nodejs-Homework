const mongoose = require("mongoose");
const userreviewSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      trim: true,
    },
    product: {
      type: String,
      trim: true,
    },
    rating: {
      type: String,
      trim: true,
    },
    comment: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserReview = mongoose.model("userreview", userreviewSchema);

module.exports = UserReview;
