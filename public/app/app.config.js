app.config(['$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider){

    $routeProvider
        .when("/", {
            //Home page
            templateUrl : "views/home-page.html",
            controller: 'MainController',
            resolve:{
                init : function () {
                    //Nothing here for now
                    console.log('home page route triggered');
                }
            }
        })
        .when("/home", {
            //Home page
            templateUrl : "views/home-page.html",
            controller: 'MainController',
            resolve:{
                init : function () {
                    //Nothing here for now
                    console.log('home page route triggered');
                }
            }
        })
        .when("/apps/train-schedule", {
            //Home page
            templateUrl : "views/apps/train.schedule.html",
            controller: 'MainController',
            resolve:{
                init : function () {
                    //Nothing here for now
                    console.log('train-schedule route triggered');
                }
            }
        })
        .when("/projects", {
            //Home page
            templateUrl : "views/project-page.html",
            controller: 'MainController',
            resolve:{
                init : function () {
                    //Nothing here for now
                    console.log('project page route triggered');
                }
            }
        })
        .when("/contact", {
            //contact page
            templateUrl : "views/contact-page.html",
            controller: 'MainController',
            resolve:{
                init : function () {
                    //Nothing here for now
                    console.log('contact page route triggered');
                }
            }
        })
        .otherwise({redirectTo: '/home'});

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
}]);