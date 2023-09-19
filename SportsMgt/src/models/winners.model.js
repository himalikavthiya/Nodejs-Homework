const mongoose = require("mongoose");

const winnersSchema = new mongoose.Schema(
  {
    turnaments:{
        type: mongoose.Types.ObjectId,
        ref:"sports_tournaments"
    },
    winning_player:{
        type:String
    },
    prize:{
        type:String
    }
  },
  {
    timestamps: true,
  }
);

const Winners = mongoose.model("sports_category", winnersSchema);
module.exports = Winners;
