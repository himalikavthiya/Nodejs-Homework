const { MongoKerberosError } = require("mongodb");
const mongoose = require("mongoose");

// Create Schema
const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "First Name is Required"],
    },
    lastname: {
      type: String,
      required: [true, "Last Name is Required"],
    },
    image: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email is Required"],
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    viewers: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },

    followers: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    following: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    posts: {
      type: mongoose.Types.ObjectId,
      ref: "Post",
    },
    comments: {
      type: mongoose.Types.ObjectId,
      ref: "Comment",
    },
    blocked: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    plan: {
      type: String,
      enum: ["Free", "Premium", "Pro"],
      default: "Free",
    },
  },
  {
    timestamps: true,
  }
);

// Create Model
const User = mongoose.model("User", UserSchema);
module.exports = User;
