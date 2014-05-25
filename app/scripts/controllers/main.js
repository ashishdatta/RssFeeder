'use strict';

var rssFeederMainCtrl = angular.module('rssFeederMainCtrl',[]);

// safe for minification
rssFeederMainCtrl.controller('MainCtrl', ['$scope', 'rssFeeder',
	function ($scope, rssFeeder) {
		$scope.list = function(data) {
			$scope.mediaResource = data;
		 	switch(data)
		 	{
		 		case 'Albums':
   				rssFeeder.Albums.query(
   					function(JSON) {
   						$scope.items = createArrayFromData(JSON);
   				});
   				break;
   			case 'TV Shows':
   				rssFeeder.TV.query(
   					function(JSON) {
   						$scope.items = createArrayFromData(JSON);
   				});
   				break;
   			case 'Movies':
   				rssFeeder.Movies.query(
   					function(JSON) {
   						$scope.items = createArrayFromData(JSON);
   				});
   				break;
   			default:
   				break;
			}
        }
		$scope.followResourceURL = function(item) {
			console.log("Clicked -> " +  item.url);
			window.open(item.url, '_blank');
		}
	}]);

// enable/disable 'active' state of <li> media resource options
function changeClass(obj) {
    switch(obj.id) {
        case 'tv':
            document.getElementById("tv").setAttribute("class", "active");
            document.getElementById("movies").setAttribute("class", "inactive");
            document.getElementById("albums").setAttribute("class", "inactive");
            break;
        case 'movies':
            document.getElementById("tv").setAttribute("class", "inactive");
            document.getElementById("movies").setAttribute("class", "active");
            document.getElementById("albums").setAttribute("class", "inactive");
            break;
        case 'albums':
            document.getElementById("tv").setAttribute("class", "inactive");
            document.getElementById("movies").setAttribute("class", "inactive");
            document.getElementById("albums").setAttribute("class", "active");
            break;
        default:
            break;
    }
}

var createArrayFromData = function(data) {
	var arr = [];
	console.log('Data feed: ' + data.feed);
	for (var i = data.feed.entry.length - 1; i >= 0; i--) {
		var entry = data.feed.entry[i];
		var obj = {};
		obj.url = entry['id'].label;
		obj.image = entry['im:image'][0].label;
		obj.name = entry['im:name'].label;
		obj.artist = entry['im:artist'].label;
		obj.releaseDate = entry['im:releaseDate'].attributes.label;
		arr.push(obj);
	};
	return arr;
}