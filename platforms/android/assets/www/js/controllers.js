angular.module('app.controllers', [])

.controller('homePageCtrl', ['$scope', '$stateParams','StackDataFactory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, StackDataFactory) {
        $scope.getTechGraph = function() {
            var n = listnew;
            // Build the chart
            $('#graphcontainer').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Most discussed technologies on stackoverflow'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                    }
                },
                series: [{
                    name: '',
                    colorByPoint: true,
                    data: n
                }]
            });
        };
        $scope.getTechGraph2 = function() {
            var n = listnew;
            // Build the chart
            $('#graphcontainer2').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Most discussed technologies on stackoverflow'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                    }
                },
                series: [{
                    name: '',
                    colorByPoint: true,
                    data: n
                }]
            });
        };
        
    
    }
])

.controller('allDataContentsCtrl', ['$scope', '$stateParams', 'StackDataFactory',
    function($scope, $stateParams, StackDataFactory) {
        $scope.getStackN = function() {
            StackDataFactory.getStackData().then(function(response) {
                // return response;
                $scope.stackData = response;
                console.log($scope.stackData);
            });
        }
    }
])

.controller('tOPCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('getStartedCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])
.controller('aboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('settingsCtrl', function ($scope, ionicDatePicker) {

//     $scope.currentDate = new Date();
// $scope.minDate = new Date(2105, 6, 1);
// $scope.maxDate = new Date(2015, 6, 31);
 
// $scope.datePickerCallback = function (val) {
//     if (!val) { 
//         console.log('Date not selected');
//     } else {
//         console.log('Selected date is : ', val);
//     }
// };

$scope.selectedDate1;
    $scope.selectedDate2;

    $scope.openDatePickerOne = function (val) {
      var ipObj1 = {
        callback: function (val) {  //Mandatory
          console.log('Return value from the datepicker popup is : ' + val, new Date(val));
          $scope.selectedDate1 = new Date(val);
        },
        disabledDates: [
          new Date(2016, 2, 16),
          new Date(2015, 3, 16),
          new Date(2015, 4, 16),
          new Date(2015, 5, 16),
          new Date('Wednesday, August 12, 2015'),
          new Date("08-16-2016"),
          new Date(1439676000000)
        ],
        from: new Date(2012, 1, 1),
        to: new Date(2018, 10, 30),
        inputDate: new Date(),
        mondayFirst: true,
        disableWeekdays: [],
        closeOnSelect: false,
        templateType: 'popup'
      };
      ionicDatePicker.openDatePicker(ipObj1);
    }

    
})

.controller('fbAuthCtrl', ['$scope', '$ionicFacebookAuth', '$ionicUser', '$state', function($scope, $ionicFacebookAuth, $ionicUser, $state) {
    $scope.loginFacebook = function() {
        console.log(" Inside FB Auth ");
        $ionicFacebookAuth.login(["public_profile", "email"]).then(function(success) {
            console.log(" Facebook login success ");
            console.log(success);
            // successfull authentication, redirect to homepage.
            // menu.homePage route is defined in routes file
            $state.go('menu.homePage');

        }, function(error) {
            console.log(" Failed in Facebook Auth");
            console.log(error);
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });

    };
}])


.controller('sliderCtrl', ['$scope', '$stateParams', '$ionicSlideBoxDelegate', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $ionicSlideBoxDelegate) {
        $scope.navSlide = function(index) {
            $ionicSlideBoxDelegate.slide(index);
            // $ionicSlideBoxDelegate.slide(index,500);
        }
        $scope.sliderImages = [
            "img/slider1.png",
            "img/slider2.png"
        ];

    }
])

.controller('googleAuthCtrl', ['$scope', '$ionicGoogleAuth', '$ionicUser', function($scope, $ionicGoogleAuth, $ionicUser) {
    console.log(" Inside Google Auth ");
    $scope.loginGoogle = function() {
        console.log(" Coming in Google ");
        $ionicGoogleAuth.login().then(function(success) {
            console.log(success);

        }, function(error) {
            console.log(" Failed in Google ");
            console.log(error);
        });

    };
}])

.controller('pushNotifiationsCtrl', ['$scope', '$ionicPush', function($scope, $ionicPush) {
    console.log(" Inside PushNotification ");
    $ionicPush.register().then(function(t) {
        console.log(" Inside Register PushNotification ");
        return $ionicPush.saveToken(t);
    }).then(function(t) {
        $scope.$on('cloud:push:notification', function(event, data) {
            console.log(" Inside Regiter function PushNotification ");
            var msg = data.message;
            alert(msg.title + ': ' + msg.text);
        });
        console.log('Token saved:', t.token);
    }, function(error) {
        console.log(" Failed in PushNotification ");
        console.log(error);
    });
}])



.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/homepage.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
