'use strict';

var createTVArrayFromData = function(data){
	var arr =[];
	for (var i = data.feed.entry.length - 1; i >= 0; i--) {
		var entry = data.feed.entry[i];
		var obj ={};
		obj.name = entry['im:name'].label;
		obj.artist = entry['im:artist'].label;
		obj.releaseDate = entry['im:releaseDate'].attributes.label;
		arr.push(obj);
	};
	return arr;
}

angular.module('rssFeederApp')
  .controller('MainCtrl', function ($scope) {
	/*
	var parsedJSON = require('app/json/movie.js');
	grunt.log.write('Hello');*/
	var obj = jQuery.getJSON('https://itunes.apple.com/us/rss/toptvepisodes/limit=50/json', 
		function( data ) {
			var arr = createTVArrayFromData(data);
			console.log(arr);
			$scope.todos = [{title:'rodrigo',author:'Jojo'}];
		});
	//grunt.log.write('Hello');
	var s = [];
	s.push({title:'rodrigo',author:'Jojo'});
	s.push({title:'rodrigo',author:'Jojo'});
	$scope.todos = s;

  });
