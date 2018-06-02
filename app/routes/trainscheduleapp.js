//Add controllers
const userController = require('../controllers/user.controller');
const indexController = require('../controllers/index.controller');
const devController = require('../controllers/dev.controller');

module.exports = function (router) {
    /* GET users listing. */
    router.get('/trainscheduleapp/schedule', userController.getTrainSchedule);
    router.get('/trainscheduleapp/trainwebapp_statistics', userController.getTrainWebAppStat);
    router.get('/trainscheduleapp/trainScheduleOfflineStorage', devController.getAllOfflineData);
    router.get('/trainscheduleapp/trainStations', devController.getAllTrainStations);

    /* POST users listing. */
    router.post('/trainscheduleapp/update_statistics_trainwebapp', userController.updateScheduleWebAppStats);
    router.post('/trainscheduleapp/updateTrainStations', indexController.updateTrainStations);
};