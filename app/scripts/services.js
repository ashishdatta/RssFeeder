'use strict';

 var rssFeederServices = angular.module('rssFeederServices', ['ngResource']);

rssFeederServices.factory('rssFeeder', ['$resource',
	function($resource){
		return { 

			TV: $resource('https://itunes.apple.com/us/rss/toptvepisodes/limit=50/json', {}, {
					query : {method : 'GET', isArray:false}
			}),
			Movies: $resource('https://itunes.apple.com/us/rss/topmovies/limit=50/json', {}, {
					query : {method : 'GET', isArray:false}
			}), 
			Music: $resource('https://itunes.apple.com/us/rss/topalbums/limit=50/json', {}, {
					query : {method : 'GET', isArray:false}
			}) 
		};
	}]);

