angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: 'AppCtrl'
        })
        // .state('menu', {
        //     url: '/menuContents',
        //     templateUrl: 'templates/menu.html',
        //     controller: 'menuCtrl'
        // })

    .state('getStarted', {
        url: '/getStarted',
        templateUrl: 'templates/getStarted.html',
        controller: 'getStartedCtrl'
    })


    // .state('tabs.about', {
    //         url: '/about',
    //         templateUrl: 'templates/about.html',
    //         controller: 'aboutCtrl'
    //     })

    .state('about', {
        url: "/about",
        views: {
            'about-tab': {
                templateUrl: "templates/about.html",
                controller: 'aboutCtrl'
            }
        }
    })

    .state('app.homePage', {
            url: "/homePage",
            views: {
                'tab-homepage': {
                    templateUrl: "templates/homePage.html",
                }
            }
        })
        // .state('tOP', {
        //     url: '/outputData',
        //     //views: {
        //     //'side-menu21': {
        //     templateUrl: 'templates/tOP.html',
        //     controller: 'tOPCtrl'
        //         //}
        //         //}
        // })



    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
    })


    //  .state('test', {
    //     url: '/test',
    //     templateUrl: 'templates/test.html',
    //     controller: 'testCtrl'
    // })

    // .state('getStarted', {
    //     url: '/getStarted',
    //     templateUrl: 'templates/getStarted.html',
    //     controller: 'getStartedCtrl'
    // })

    // .state('allDataContents', {
    //     url: '/allDataContents',
    //     templateUrl: 'templates/allDataContents.html',
    //     controller: 'allDataContentsCtrl'
    // })

      .state('app.topList', {
        url: '/topList',
        views: {
        'tab-toplist': {
          templateUrl: "templates/topList.html",
        }
      }
    })

    .state('app.settings', {
        url: '/settings',
        views: {
            'tab-settings': {
                templateUrl: "templates/settings.html",
                controller: 'settingsCtrl'
            }
        }
    })

    .state('searchContent', {
        cache: false, // to run the ng-init function everytime the page is opened, remove the cache
        url: '/searchContent',
        templateUrl: 'templates/searchContent.html',
        controller: 'homePageCtrl'
    })


    $urlRouterProvider.otherwise('/app/homePage') // /app/homePage



});



// .state('app', {
//     url: "/app",
//     abstract: true,
//     templateUrl: "templates/menu.html",
//     controller: 'AppCtrl'
//   })

//   .state('app.tabs', {
//     url: "/tabs",
//     views: {
//       'menuContent': {
//         templateUrl: "templates/tabs.html"
//       }
//     }
//   })

// .state('app.tabs.tab1', {
//       url: '/tab1',
//       views: {
//         'tab-tab1': {
//           templateUrl: 'templates/tab-tab1.html',
//           controller: 'tab1Ctrl'
//         }
//       }
//     })


//     .state('app.about', {
//       url: "/about",
//       views: {
//         'menuContent': {
//           templateUrl: "templates/about.html",
//           controller: 'aboutCtrl'
//         }
//       }
//   });
//   // if none of the above states are matched, use this as the fallback
//   $urlRouterProvider.otherwise('/app/tabs');
// });
