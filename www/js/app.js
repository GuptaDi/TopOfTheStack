// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives', 'app.services', 'ionic.cloud', 'ionic-datepicker'])

.config(function($ionicCloudProvider) {
    $ionicCloudProvider.init({
        "core": {
            "app_id": "2c145d19"
        },
        "push": {
            "sender_id": "923688165386",
            "pluginConfig": {
                "ios": {
                    "badge": true,
                    "sound": true
                },
                "android": {
                    "iconColor": "#343434"
                }
            }
        }
    });
})

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // console.log(" ________ ");
        // console.log(globalData.app_id);
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

listnew = [{ name: 'javascript', y: 37 }, { name: 'java', y: 30 }, { name: 'android', y: 24 },
    { name: 'php', y: 23 }, { name: 'python', y: 22 }, { name: 'c# ', y: 21 },
    { name: 'html', y: 17 }, { name: 'jquery', y: 15 }, { name: 'ios', y: 13 },
    { name: 'css', y: 11 }, { name: 'c++', y: 10 }, { name: 'mysql', y: 10 },
    { name: 'angularjs', y: 9 }, { name: 'swift', y: 8 }, { name: 'sql', y: 7 }

];
