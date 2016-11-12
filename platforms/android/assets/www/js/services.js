//var allStackData = {};

angular.module('app.services', [])

.service('DateSettingService', function() {
    var startDate = "";
    var endDate = "";
    var searchTagVal = "c"; // default value
    var keyUrl = "&key=egA029dyJ24Auv0bm5y0Ug((&access_token=mc0nqVUDJdRgV5ePheyS4Q))";
    var username = '';
    var profilePic = '';
    // set date ---------
    this.setStartDate = function() {
        this.startDate = "";
    }
    this.setEndDate = function() {
            this.endDate = "";
        }
        // get Date ----------
    this.getStartDate = function() {
        return this.startDate;
    }
    this.getEndDate = function() {
            return this.endDate;
        }
        // global key to be append in the url
    this.getKeyUrl = function() {
        return keyUrl;
    }
    this.setSearchTagValue = function(tagVal) {
        searchTagVal = tagVal;
    }
    this.getSearchTagValue = function() {
        return searchTagVal;
    }
    this.setUserName = function(userName) {
        username = userName;
    }
    this.getUserName = function() {
        return username;
    }
    this.setProfilePic = function(image) {
        profilePic = image;
    }
    this.getProfilePic = function() {
            return profilePic;
        }
        // initialize date
    this.setStartDate();
    this.setEndDate();
})



// Its a users questions factory. Here based on the tab click, we are passing the end url. 
// End url further appends to form a final url. 
.factory('StackDataFactory', ['$http', 'DateSettingService', function($http, DateSettingService) {
        //  var stackCallUrl = "http://54.213.200.141:8080/Raml/rest/userquestions/23";
        //  var stackCallUrl = "http://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow";
        var fromDate = DateSettingService.getStartDate();
        var toDate = DateSettingService.getEndDate();
        var stackCallUrl = "https://api.stackexchange.com/2.2/questions?";
        var fromDateParam = "fromdate = " + fromDate;
        var toDateParam = "todate=" + toDate;
        var paramSet = false;
        var keyUrl = DateSettingService.getKeyUrl();
        if (fromDate && toDate) {
            stackCallUrl += fromDateParam + "&" + toDateParam;
            paramSet = true;
        } else {
            if (fromDate) {
                stackCallUrl += fromDateParam;
                paramSet = true;
            }
            if (toDate) {
                stackCallUrl += toDateParam;
                paramSet = true;
            }
        }
        var stackD = {
            getStackData: function(endUrl) {
                var endUrl = endUrl;
                if (paramSet) {
                    stackCallUrl += "&" + endUrl;
                } else {
                    stackCallUrl += endUrl;
                }
                stackCallUrl += keyUrl;
                console.log(stackCallUrl);

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

    .factory('StackDataFactory2', ['$http', 'DateSettingService', function($http, DateSettingService) {
        //  var stackCallUrl = "http://54.213.200.141:8080/Raml/rest/userquestions/23";
        //  var stackCallUrl = "http://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow";
        var fromDate = DateSettingService.getStartDate();
        var toDate = DateSettingService.getEndDate();
        var stackCallUrl = "https://api.stackexchange.com/2.2/questions?";
        var fromDateParam = "fromdate = " + fromDate;
        var toDateParam = "todate=" + toDate;
        var paramSet = false;
        var endUrl = "order=desc&sort=activity&site=stackoverflow";
        var keyUrl = DateSettingService.getKeyUrl();
        if (fromDate && toDate) {
            stackCallUrl += fromDateParam + "&" + toDateParam;
            paramSet = true;
        } else {
            if (fromDate) {
                stackCallUrl += fromDateParam;
                paramSet = true;
            }
            if (toDate) {
                stackCallUrl += toDateParam;
                paramSet = true;
            }
        }
        if (paramSet) {
            stackCallUrl += "&" + endUrl;
        } else {
            stackCallUrl += endUrl;
        }
        stackCallUrl += keyUrl;
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

.factory('SearchByTagDataFactory', ['$http', 'DateSettingService', function($http, DateSettingService) {
        var keyUrl = DateSettingService.getKeyUrl();

        var tagsData = {
            getSearchTagsData: function() {
                var searchVal = DateSettingService.getSearchTagValue();
                // prepare url 
                var stackCallUrl = "https://api.stackexchange.com/2.2/tags/";
                var tagValue = searchVal;
                var apiUrl = "/faq?site=stackoverflow";
                stackCallUrl += tagValue + apiUrl;
                stackCallUrl += keyUrl;
                console.log(" User entered Search Tag Url ---");
                console.log(stackCallUrl);
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
        console.log(tagsData);
        return tagsData;
    }])
    .factory('BlankFactory', [function() {

    }])

.service('BlankService', [function() {

}]);
