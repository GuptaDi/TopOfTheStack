angular.module('app.controllers', [])

.controller('homePageCtrl', ['$scope', '$stateParams', 'StackDataFactory', 'SearchByTagDataFactory','UserLocationFactory',
    '$state', '$rootScope', 'DateSettingService','InfoFactory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, StackDataFactory, SearchByTagDataFactory,UserLocationFactory, $state, $rootScope, DateSettingService,InfoFactory) {
        
        
         $scope.liveInfo = "";
         $scope.activeUsers = 2;
        $scope.getLiveInfo = function() {
            InfoFactory.getLiveInfo().then(function(response) {
                // return response;
                $scope.liveInfo = response.items;
                console.log("^@@@@@@@@@@@@@@@!!!!!!!");
                console.log($scope.liveInfo);
               $scope.activeUsers = $scope.liveInfo[0].new_active_users;
               console.log($scope.activeUsers );
            }, function(errorResponse) {
                console.log(" Error ---");
                console.log(errorResponse);
            });

        };

        
        
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

            var userByLoc = [];
            var arr =['Country', 'Users Count'];
            userByLoc.push(arr);



            UserLocationFactory.getUserLocationData().then(function(response) {
                    var userLocLength = response.userslocation.length;
                    for(var i=0; i<userLocLength; i++){
                        var loc = response.userslocation[i]['location'];
                        if(loc && loc != 'india' && loc != 'CA' && loc != 'U.S.' && loc != 'EstadosUnidos' ){
                        var arrTemp = [];
                        
                        arrTemp.push(response.userslocation[i]['location']);
                        arrTemp.push(response.userslocation[i]['count']*5);
                        userByLoc.push(arrTemp);
                    }
            }
                    console.log("^^^^^^^^^^^^^^");
                console.log(userByLoc);
google.charts.load('upcoming', { 'packages': ['geochart'] });
            google.charts.setOnLoadCallback(drawRegionsMap);

                }, function(errorResponse) {
                    console.log(" Error ---");
                    console.log(errorResponse);
                        });


            // var userByLoc = [];
            //     UserLocationFactory.getUserLocationData().then(function(resp){
            //         userByLoc = resp;
            //     });
            //     console.log(userByLoc);

            function drawRegionsMap() {
               var data = google.visualization.arrayToDataTable(userByLoc);
                // var data = google.visualization.arrayToDataTable([
                //      ['Country', 'Popularity'],
                //     ['Germany', 100],
                //     ['United States', 100],
                //     ['Brazil', 100],
                //     ['Canada', 100],
                //     ['France', 100],
                //     ['RU', 100],
                //     [' India ', 190],
                //     ['Canada', 900],

                // ]);

                var options = {};

                var chart = new google.visualization.GeoChart(document.getElementById('graphcontainer2'));

                chart.draw(data, options);
            }
        };

        $scope.searchByTag = ""; // default search value
        $scope.getSearchByTags = function() {
            $scope.searchByTag = this.searchByTag; // get value from form element
            DateSettingService.setSearchTagValue(this.searchByTag);
            $scope.searchByTag = "" // empty the input after search

            $state.go('searchContent'); // redirect to a new page
        };
    }
])

.controller('searchContentCtrl', ['$scope', '$stateParams', 'StackDataFactory', 'SearchByTagDataFactory', '$rootScope',
    function($scope, $stateParams, StackDataFactory, SearchByTagDataFactory, $rootScope) {
        $scope.stackData = "";
        $scope.getSearchContent = function() {
            SearchByTagDataFactory.getSearchTagsData().then(function(response) {
                // return response;
                $scope.stackData = response;
                console.log($scope.stackData);
            }, function(errorResponse) {
                console.log(" Error ---");
                console.log(errorResponse);
            });

        };

    }
])


.controller('allDataContentsCtrl', ['$rootScope', "$scope", "$stateParams", "$q", "$location", "$window", '$timeout', 'StackDataFactory','StackDataFactory2',
    function($rootScope, $scope, $stateParams, $q, $location, $window, $timeout, StackDataFactory,StackDataFactory2) {
        $scope.getStackN = function() {
            StackDataFactory.getStackData('order=desc&sort=activity&site=stackoverflow').then(function(response) {
                // return response;
                $scope.stackData = response;
                console.log($scope.stackData);
            });
        }
        $scope.getDetails2 = function() {
            StackDataFactory2.getStackData().then(function(response) {
                // return response;
                $scope.stackData2 = response;
                console.log($scope.stackData2);
            });
        }
        
        $scope.onSlideMove = function(data) {
            //alert("You have selected " + data.index + " tab");
        };
    }
])


// .controller('testCtrl', ['$rootScope', "$scope", "$stateParams", "$q", "$location", "$window", '$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
//     // You can include any angular dependencies as parameters for this function
//     // TIP: Access Route Parameters for your page via $stateParams.parameterName
//     function($rootScope, $scope, $stateParams, $q, $location, $window, $timeout) {
//         $scope.onSlideMove = function(data){
//                 //alert("You have selected " + data.index + " tab");
//             };

//     }
// ])



.controller('tOPCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])


// app.controller("IndexCtrl", ['$rootScope', "$scope", "$stateParams", "$q", "$location", "$window", '$timeout', 
//             function($rootScope, $scope, $stateParams, $q, $location, $window, $timeout){
//             $scope.onSlideMove = function(data){
//                 alert("You have selected " + data.index + " tab");
//             };
//         }


.controller('menuCtrl', ['$scope', '$stateParams', 'DateSettingService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, DateSettingService) {
        $scope.userName = DateSettingService.getUserName();
        $scope.profilePic = DateSettingService.getProfilePic();

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

.controller('settingsCtrl', ['$scope', 'ionicDatePicker', 'DateSettingService',
    function($scope, ionicDatePicker, DateSettingService) {
        $scope.startDateSelected;
        $scope.endDateSelected;
        $scope.startDatePicker = function(val) {
            var ipObj1 = {
                callback: function(val) { //Mandatory
                    console.log('Return value from the datepicker popup is : ' + val, new Date(val));
                    $scope.startDateSelected = val;
                    DateSettingService.setStartDate = val; // set start date value in the global parameter
                },
                disabledDates: [ //Optional
                    new Date(2016, 2, 16),
                    new Date(2015, 3, 16),
                    new Date(2015, 4, 16),
                    new Date(2015, 5, 16),
                    new Date('Wednesday, August 12, 2015'),
                    new Date("08-16-2016"),
                    new Date(1439676000000)
                ],
                from: new Date(2012, 1, 1), //Optional
                to: new Date(), //Optional - Disable future dates
                inputDate: new Date(), //Optional
                mondayFirst: true, //Optional
                disableWeekdays: [0], //Optional
                closeOnSelect: false, //Optional
                templateType: 'popup' //Optional
            };
            ionicDatePicker.openDatePicker(ipObj1);
        };

        $scope.endDatePicker = function(val) {
            var ipObj2 = {
                callback: function(val) { //Mandatory
                    console.log('Return value from the datepicker popup is : ' + val, new Date(val));
                    $scope.endDateSelected = new Date(val);
                    DateSettingService.setEndDate = val; // set end date value in the global parameter
                },
                disabledDates: [ //Optional
                    new Date(2016, 2, 16),
                    new Date(2015, 3, 16),
                    new Date(2015, 4, 16),
                    new Date(2015, 5, 16),
                    new Date('Wednesday, August 12, 2015'),
                    new Date("08-16-2016"),
                    new Date(1439676000000)
                ],
                from: new Date(2012, 1, 1), //Optional
                to: new Date(), //Optional
                inputDate: new Date(), //Optional
                mondayFirst: true, //Optional
                disableWeekdays: [0], //Optional
                closeOnSelect: false, //Optional
                templateType: 'popup' //Optional
            };
            ionicDatePicker.openDatePicker(ipObj2);
        };
    }
])

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

.controller('fbAuthCtrl', ['$scope', '$ionicFacebookAuth', '$ionicUser', '$state', '$ionicUser', 'DateSettingService',
    function($scope, $ionicFacebookAuth, $ionicUser, $state, $ionicUser, DateSettingService) {
        console.log(" Inside FB Auth ");
        $scope.loginFacebook = function() {
            console.log(" Inside FB Auth ");
            $ionicFacebookAuth.login(["public_profile", "email", "user_friends"]).then(function(success) {
                    console.log(success.token);
                    var full_name = $ionicUser.social.facebook.data.full_name;
                    DateSettingService.setUserName($ionicUser.social.facebook.data.full_name);
                    var profile_picture = $ionicUser.social.facebook.data.profile_picture;
                    DateSettingService.setProfilePic($ionicUser.social.facebook.data.profile_picture);
                    // console.log(full_name);
                    $state.go('app.homePage');
                },
                function(error) {
                    console.log(" Failed in Facebook Auth");
                    console.log(error);
                    var alertPopup = $ionicPopup.alert({
                        title: 'Login failed!',
                        template: 'Please check your credentials!'
                    });
                });

        };
    }
])




.controller('googleAuthCtrl', ['$scope', '$ionicGoogleAuth', '$ionicUser', '$state', function($scope, $ionicGoogleAuth, $ionicUser, $state) {
    console.log(" Inside Google Auth ");
    $scope.loginGoogle = function() {
        console.log(" Coming in Google ");
        $ionicGoogleAuth.login().then(function(success) {
            console.log(" success in Google ");
            console.log(success);

            var full_name = $ionicUser.social.google.data.full_name
            DateSettingService.setUserName($ionicUser.social.facebook.data.full_name);
            var profile_picture = $ionicUser.social.google.data.profile_picture
            DateSettingService.setProfilePic($ionicUser.social.facebook.data.profile_picture);


            $state.go('app.homePage');

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
