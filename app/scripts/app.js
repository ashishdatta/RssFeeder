'use strict';

var rssFeederApp = angular.module('rssFeederApp',
  // dependencies
  ['ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'rssFeederServices',
    'rssFeederMainCtrl',
    'rssFeederDetailsCtrl'
]);

rssFeederApp.config( ['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/details', {
      templateUrl: 'views/details.html',
      controller: 'DetailsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
