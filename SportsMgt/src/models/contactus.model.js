const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    fullname:{
     type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    message:{
        type: String,
        trim: true,
    }
  },
  {
    timestamps: true,
  }
);

const ContactUs = mongoose.model("contactus", contactSchema);
module.exports = ContactUs;
