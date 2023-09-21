var express = require('express');
var foundersRoute = require("./founders.route");
var tournamentsRoute = require("./tournaments.route");
var gelleryRoute = require("./gallery.route");
var matchesRoute = require("./matches.route");
var playersRoute = require("./players.route");
var teamRoute = require("./team.route");
var resultRoute = require("./match_result.route");
var tokenRoute = require("./token.route");

var router = express.Router();

/**Create particular routes */
router.use('/founders',foundersRoute);
router.use('/tournamnet',tournamentsRoute);
router.use('/gellery',gelleryRoute);
router.use('/matches',matchesRoute);
router.use('/players',playersRoute);
router.use('/team',teamRoute);
router.use('/result',resultRoute);
router.use('/token',tokenRoute);


module.exports = router;
