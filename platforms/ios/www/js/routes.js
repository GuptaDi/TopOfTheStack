angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'templates/tabs.html'
        })
        .state('menu', {
            url: '/menuContents',
            templateUrl: 'templates/menu.html',
            controller: 'menuCtrl'
        })

    .state('tab.homePage', {
        url: '/homePage',
        views: {
            'side-menu21': {
                templateUrl: 'templates/homePage.html',
                controller: 'homePageCtrl'
            }
        }
    })

    .state('tOP', {
        url: '/outputData',
        //views: {
        //'side-menu21': {
        templateUrl: 'templates/tOP.html',
        controller: 'tOPCtrl'
            //}
            //}
    })



    .state('login', {
        url: '/loginScreen',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
    })

    .state('getStarted', {
        url: '/getStarted',
        templateUrl: 'templates/getStarted.html',
        controller: 'getStartedCtrl'
    })

    .state('allDataContents', {
        url: '/allDataContents',
        templateUrl: 'templates/allDataContents.html',
        controller: 'allDataContentsCtrl'
    })

    .state('settings', {
        url: '/settings',
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
    })
    $urlRouterProvider.otherwise('/settings')



});
