angular.module('MyBlog').config(['$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider){

    $routeProvider
        .when("/", {
            //Home page
            templateUrl : "dist/views/home-page.html",
            controller: 'MainController',
            resolve:{
                init : function () {
                    //Nothing here for now
                    console.log('home page route triggered');
                }
            },
            data: {
                meta: {
                    'title' : 'Prasanna Deshappriya | Home',
                    'description' : 'My name is Prasanna Deshappriya Bandara. I’m an undergraduate student from University of Moratuwa and currently specializing ICE (Integrated Computer Engineering) stream. This website is my personal website and it is about my projects, my personal details and my skills.',
                    'og:url': 'https://prasanna.alwaysdata.net',
                    'og:title' : 'Prasanna Deshappriya | Personal Website',
                    'og:description': 'Personal Blog of Prasanna Deshappriya, University of Moratuwa'
                }
            }
        })
        .when("/home", {
            //Home page
            templateUrl : "dist/views/home-page.html",
            controller: 'MainController',
            resolve:{
                init : function () {
                    //Nothing here for now
                    console.log('home page route triggered');
                }
            },
            data: {
                meta: {
                    'title' : 'Prasanna Deshappriya | Home',
                    'description' : 'My name is Prasanna Deshappriya Bandara. I’m an undergraduate student from University of Moratuwa and currently specializing ICE (Integrated Computer Engineering) stream. This website is my personal website and it is about my projects, my personal details and my skills.',
                    'og:url': 'https://prasanna.alwaysdata.net',
                    'og:title' : 'Prasanna Deshappriya | Personal Website',
                    'og:description': 'Personal Blog of Prasanna Deshappriya, University of Moratuwa'
                }
            }
        })
        .when("/apps/train-schedule", {
            //Home page
            templateUrl : "dist/views/apps/train.schedule.html",
            controller: 'MainController',
            resolve:{
                init : function () {
                    //Nothing here for now
                    console.log('train-schedule route triggered');
                }
            },
            data: {
                meta: {
                    'title' : 'Prasanna Deshappriya | Train Schedule',
                    'description' : 'This app can provide services such as searching for train times, information and etc. If Lanka gateway server is on maintenance, this will show the offline results',
                    'og:url': 'https://prasanna.alwaysdata.net/apps/train-schedule',
                    'og:title' : 'Prasanna Deshappriya | Train Schedule',
                    'og:description': 'This app can provide services such as searching for train times, information and etc. If Lanka gateway server is on maintenance, this will show the offline results'
                }
            }
        })
        .when("/projects", {
            //Home page
            templateUrl : "dist/views/project-page.html",
            controller: 'MainController',
            resolve:{
                init : function () {
                    //Nothing here for now
                    console.log('project page route triggered');
                }
            },
            data: {
                meta: {
                    'title' : 'Prasanna Deshappriya | Projects',
                    'description' : 'I have completed lots of projects and select few projects to publish on my website. You can find out more details about the projects.',
                    'og:url': 'https://prasanna.alwaysdata.net/projects',
                    'og:title' : 'Prasanna Deshappriya | Projects',
                    'og:description': 'I have completed lots of projects and select few projects to publish on my website. You can find out more details about the projects.'
                }
            }
        })
        .when("/contact", {
            //contact page
            templateUrl : "dist/views/contact-page.html",
            controller: 'MainController',
            resolve:{
                init : function () {
                    //Nothing here for now
                    console.log('contact page route triggered');
                }
            },
            data: {
                meta: {
                    'title' : 'Prasanna Deshappriya | Contact',
                    'description' : 'In this section, you can contact me by sending an email. My Facebook, Github, Twitter, Linkedin profiles are listed their so that you can contact me through them as well',
                    'og:url': 'https://prasanna.alwaysdata.net/contact',
                    'og:title' : 'Prasanna Deshappriya | Contact',
                    'og:description': 'In this section, you can contact me by sending an email. My Facebook, Github, Twitter, Linkedin profiles are listed their so that you can contact me through them as well'
                }
            }
        })
        .otherwise({redirectTo: '/home'});

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
        // $locationProvider.hashPrefix('!');
}]);