//Run when refresh the page
app.run(['PageRefreshService','ngMeta',function (PageRefreshService, ngMeta) {
    PageRefreshService.run();
    //Initialize the ng-meta module [Responsible for inject meta tag values when route changes]
    ngMeta.init();
}]);
