'use strict';

var rssFeederServices = angular.module('rssFeederServices', ['ngResource']);

rssFeederServices.factory('rssFeeder', ['$resource',
	function($resource) {
		return {
			TV: $resource('https://itunes.apple.com/us/rss/toptvepisodes/limit=50/json', {}, {
					query : {method : 'GET', isArray:false}
			}),
			Movies: $resource('https://itunes.apple.com/us/rss/topmovies/limit=50/json', {}, {
					query : {method : 'GET', isArray:false}
			}),
			Albums: $resource('https://itunes.apple.com/us/rss/topalbums/limit=50/json', {}, {
					query : {method : 'GET', isArray:false}
			})
		};
	}]);

// var rssFeederExchangerServices = angular.module('rssFeederExchangerServices', []);

// rssFeederExchangerServices.factory('exchangerServices', function() {
// 	var savedData = {};

// 	function set(data) {
// 		savedData = data;
// 		console.log(savedData);
// 	}

// 	function get() {
// 		return savedData;
// 	}

// 	return { set : set, get : get };
// });
