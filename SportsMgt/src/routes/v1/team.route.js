var express = require("express");
const { teamController } = require("../../controllers/index");
const validate = require("../../middlewares/validate");
const { teamValidation } = require("../../validations");

var router = express.Router();

/**Craete team data */
router.post("/createteams",
validate(teamValidation.createTeam),
teamController.createTeam);

/** Get team list */
router.get("/teamlist", teamController.getTeamList);

/** Delete team */
router.delete("/delete-team/:teamId", teamController.updateTeam);

/** team details update by id */
router.put("/update-team/:teamId", teamController.updateTeam);

module.exports = router;
