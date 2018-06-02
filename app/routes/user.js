module.exports = function (router) {
    router.get('/test_user', function (req,res,next) {
        return res.send('user route section works');
    });
};