angular.module('app.controllers', [])
  
.controller('homePageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, StackDataFactory) {
    $scope.getTechGraph = function(){
        var n= listnew ;
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
}])
   
.controller('allDataContentsCtrl', ['$scope', '$stateParams','StackDataFactory',
function ($scope, $stateParams, StackDataFactory){
     $scope.getStackN = function(){
        StackDataFactory.getStackData().then(function(response){
           // return response;
        $scope.stackData    = response;
            console.log($scope.stackData);
        });
    }
}])

.controller('tOPCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('getStartedCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 

.controller('fbAuthCtrl',['$scope','$ionicFacebookAuth','$ionicUser', function($scope, $ionicFacebookAuth, $ionicUser) {
    console.log("#######");
    $scope.loginFacebook = function(){
        console.log(" Coming in FB ");
        $ionicFacebookAuth.login(["public_profile", "email"]).then(function(success){
        console.log(success);
 
    }, function(error){
        console.log(error);
  });
 
};
}])

.controller('googleAuthCtrl',['$scope','$ionicGoogleAuth','$ionicUser', function($scope, $ionicFacebookAuth, $ionicUser) {
    console.log("#######");
    $scope.loginGoogle = function(){
        console.log(" Coming in FB ");
        $ionicGoogleAuth.login(["public_profile", "email"]).then(function(success){
        console.log(success);
 
    }, function(error){
        console.log(error);
  });
 
};
}])

