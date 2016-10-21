angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('homePage', {
    url: '/homePage',
    templateUrl: 'templates/homePage.html',
    controller: 'homePageCtrl'
  })

  .state('menu.tOP', {
    url: '/outputData',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tOP.html',
        controller: 'tOPCtrl'
      }
    }
  })

  .state('menu', {
    url: '/menuContents',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
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

$urlRouterProvider.otherwise('/getStarted')

  

});