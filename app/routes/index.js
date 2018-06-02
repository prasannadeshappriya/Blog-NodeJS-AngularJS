var express = require('express');
var router = express.Router();

//Core API routes
require('../routes/api')(router);

//API routes for user
require('../routes/user')(router);

//API routes for trainschedule-server
require('../routes/trainscheduleapp')(router);

module.exports = router;
