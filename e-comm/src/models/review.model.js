const mongoose = require("mongoose");
const userreviewSchema = new mongoose.Schema(
  {
    user: {
      type:mongoose.Types.ObjectId,
      ref: "user"
    },
    product: {
      type:mongoose.Types.ObjectId,
      ref: "product"
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
