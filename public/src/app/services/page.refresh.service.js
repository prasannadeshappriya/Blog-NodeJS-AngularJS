angular.module('MyBlog').factory('PageRefreshService', [function () {
    let service = {};
    service.run = run;
    return service;

    function run() {
        console.log('Page Refresh Service Initialized');
    }
}]);