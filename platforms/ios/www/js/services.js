//var allStackData = {};

angular.module('app.services', [])

.factory('StackDataFactory', ['$http', function($http) {
    //  var stackCallUrl = "http://54.213.200.141:8080/Raml/rest/userquestions/23";
    var stackCallUrl = "http://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow";
    //  var allStackData ={};
    var stackD = {
        getStackData: function() {
            var allStackData = {};
            return $http({
                method: 'GET',
                url: stackCallUrl,
            }).then(function(response) {
                // success . Do something with response
                //    console.log(response.data);
                return response.data;

            });

            // return  allStackData;
        }
    }
    return stackD;
}])

.factory('BlankFactory', [function() {

}])

.service('BlankService', [function() {

}]);
