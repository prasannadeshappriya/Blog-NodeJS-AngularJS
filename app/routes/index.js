const express = require('express');
const router = express.Router();

//Routes should start with /api/, Otherwise server will
//Redirect to the index page

//Core API routes
require('../routes/api')(router);

//API routes for user
require('../routes/user')(router);

//API routes for trainschedule-server
require('../routes/trainscheduleapp')(router);

module.exports = router;
