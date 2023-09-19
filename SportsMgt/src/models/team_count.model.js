const mongoose = require("mongoose");

const teamCountSchema = new mongoose.Schema(
  {
    total_team: {
      type: Number,
    },
    total_players: {
      type: Number,
    },
    winner_team: {
      type: mongoose.Types.ObjectId,
      ref: "winners",
    },
  },
  {
    timestamps: true,
  }
);

const TeamCount= mongoose.model(
  "teamcount",
  teamCountSchema
);
module.exports = TeamCount;
