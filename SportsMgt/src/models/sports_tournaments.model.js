const mongoose = require("mongoose");

const tournamentSchema = new mongoose.Schema(
  {
    tournament_name: {
      type: String,
      trim: true,
    },
    start_date: {
      type: Date
    },
    end_date:{
      type: Date
    },
    loaction:{
      type: String,
    },
    winner_team:{
        type: mongoose.Types.ObjectId,
        ref:"winners"
    }
  },
  {
    timestamps: true,
  }
);

const Sports_Tournaments = mongoose.model("sports_tournaments", tournamentSchema);
module.exports = Sports_Tournaments