const mongoose = require("mongoose");

const foundersSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    nationality: {
      type: String,
      trim: true,
    },
    phone_no: {
      tye: Number,
    },
    sport_team: {
        type:mongoose.Types.ObjectId,
        ref:"sport_team"
    },
  },
  {
    timestamps: true,
  }
);

const Founders = mongoose.model("founders", foundersSchema);
module.exports = Founders;
