const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema(
  {
    token: {
      type: String,
    },
    user: {
      type:mongoose.Types.ObjectId,
      ref:"user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const token = mongoose.model("token", tokenSchema);

module.exports = token;
