//var allStackData = {};

angular.module('app.services', [])

.service('DateSettingService',function(){
        var startDate = "";
        var endDate = "";
        // set date ---------
       this.setStartDate = function (){
            this.startDate = "";
        }
        this.setEndDate = function(){
            this.endDate = "";
        }
        // get Date ----------
        this.getStartDate = function(){
            return this.startDate;
        }
        this.getEndDate = function(){
            return this.endDate;
        }
        // initialize date
        this.setStartDate();
        this.setEndDate();
    })

.factory('StackDataFactory', ['$http','DateSettingService', function($http,DateSettingService) {
    //  var stackCallUrl = "http://54.213.200.141:8080/Raml/rest/userquestions/23";
  //  var stackCallUrl = "http://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow";
    var fromDate = DateSettingService.getStartDate();
    var toDate = DateSettingService.getEndDate();
    var stackCallUrl = "http://api.stackexchange.com/2.2/questions?";
    var fromDateParam = "fromdate = "+ fromDate;
    var toDateParam = "todate="+ toDate;
    var paramSet = false;
    var endUrl = "order=desc&sort=activity&site=stackoverflow";
    if(fromDate && toDate){
        stackCallUrl+= fromDateParam +"&"+toDateParam;
        paramSet = true;
    }else{
        if(fromDate){
            stackCallUrl+= fromDateParam;
            paramSet = true;
        }
        if(toDate){
           stackCallUrl += toDateParam;
            paramSet = true;
        }
    }
    if(paramSet){
        stackCallUrl += "&"+endUrl;
    }else{
        stackCallUrl += endUrl;
    }
    console.log(stackCallUrl);
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
        }
    }
    
    return stackD;
}])
//.factory('TagsDataFactory', ['$http', function($http) {
//    var stackCallUrl = "http://api.stackexchange.com/2.2/tags?fromdate=1477958400&todate=1477958400&order=desc&sort=popular&site=stackoverflow";
//    var tagsData = {
//        getTagsData: function() {
//            var allStackData = {};
//            return $http({
//                method: 'GET',
//                url: stackCallUrl,
//            }).then(function(response) {
//                // success . Do something with response
//                //    console.log(response.data);
//                return response.data;
//          });
//        }
//    }
//    console.log(tagsData);
//    return tagsData;
//}])

.factory('BlankFactory', [function() {

}])

.service('BlankService', [function() {

}]);
