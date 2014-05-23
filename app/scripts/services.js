'use strict';

 var rssFeederServices = angular.module('rssFeederServices', ['ngResource']);

rssFeederServices.factory('rssFeeder', ['$resource',
	function($resource){
		return $resource('https://itunes.apple.com/us/rss/toptvepisodes/limit=50/json', {}, {
			query : {method : 'GET', isArray:false}
		}); 
	}]);

