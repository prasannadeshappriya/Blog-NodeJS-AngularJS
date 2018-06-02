module.exports = function (router) {
    router.get('/test_api', function(req, res, next) {
        return res.send("api route section works");
    });
};
