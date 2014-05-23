'use strict';

 var rssFeederMainCtrl = angular.module('rssFeederMainCtrl',[]);

   rssFeederMainCtrl.controller('MainCtrl', ['$scope', 'rssFeeder', function ($scope, rssFeeder){
   		$scope.items = rssFeeder.query();  

   }]);


