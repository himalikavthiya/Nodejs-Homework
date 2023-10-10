const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
