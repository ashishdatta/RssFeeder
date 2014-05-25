'use strict';

var rssFeederApp = angular.module('rssFeederApp',
  // dependencies
  ['ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'rssFeederServices',
    'rssFeederMainCtrl'
]);

rssFeederApp.config( ['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
