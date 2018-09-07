angular.module('MyBlog', [
    'ngStorage',
    'ngRoute',
    'ngMeta'
]);

//Configure the constants
angular.module('MyBlog').constant(
    'host_url', 'http://localhost:3000/api/trainscheduleapp/'
);

//Alwaysdata.net Link:
// 'host_url', 'https://prasanna.alwaysdata.net/api/trainscheduleapp/'

//Localhost Link
// 'host_url', 'http://localhost:3000/api/trainscheduleapp/'