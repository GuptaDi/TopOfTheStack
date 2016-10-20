angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('topOSHomeScreen', {
    url: '/page1',
    templateUrl: 'templates/topOSHomeScreen.html',
    controller: 'topOSHomeScreenCtrl'
  })

  .state('menu.allDataContentsTopOfTheStack', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/allDataContentsTopOfTheStack.html',
        controller: 'allDataContentsTopOfTheStackCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('startingPageTOS', {
    url: '/page6',
    templateUrl: 'templates/startingPageTOS.html',
    controller: 'startingPageTOSCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});