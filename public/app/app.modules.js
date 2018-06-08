let app = angular.module('MyBlog', [
    'ngStorage',
    'ngRoute',
]);

//Configure the constants
app.constant(
    'host_url', 'https://prasanna.alwaysdata.net/api/trainscheduleapp/'
);

//Alwaysdata.net Link:
// 'host_url', 'https://prasanna.alwaysdata.net/api/trainscheduleapp/'

//Localhost Link
// 'host_url', 'http://localhost:3000/api/trainscheduleapp/'