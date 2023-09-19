var express = require('express');
var foundersRoute = require("./founders.route");
var router = express.Router();


/**Create particular routes */
router.use('/founders',foundersRoute);
module.exports = router;
