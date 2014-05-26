'use strict';

// DETAILS CONTROLLER ==========================================================
var rssFeederDetailsCtrl = angular.module('rssFeederDetailsCtrl',[]);
var prevView;

rssFeederDetailsCtrl.controller('DetailsCtrl', ['$scope',
  function ($scope) {
    console.log('in DetailsCtrl');

    $scope.details = arr[index];
    console.log($scope.details);

    $scope.backToList = function() {
      // use prevView to call list() again so that when going back from
      // the details page the user sees the listview as before
      console.log('backToList, prev = ' + prevView);
    }
}]);

// MAIN CONTROLLER =============================================================
var rssFeederMainCtrl = angular.module('rssFeederMainCtrl',[]);
var index;

rssFeederMainCtrl.controller('MainCtrl', ['$scope', 'rssFeeder',
  function ($scope, rssFeeder) {
    console.log('in MainCtrl');

    $scope.list = function(data) {
      console.log('in list');
      $scope.mediaResource = data;
      switch(data)
      {
        case 'Albums':
          rssFeeder.Albums.query(
            function(JSON) {
              $scope.items = createArrayFromData(JSON, data);
          });
          break;
        case 'TV Shows':
          rssFeeder.TV.query(
            function(JSON) {
              $scope.items = createArrayFromData(JSON, data);
          });
          break;
        case 'Movies':
          rssFeeder.Movies.query(
            function(JSON) {
              $scope.items = createArrayFromData(JSON, data);
          });
          break;
        default:
          break;
      }
    }

    $scope.followResourceURL = function(item) {
      console.log('in followResourceURL');
      window.open(item.url, '_blank');
    }

    $scope.setIndexForDetails = function($index, media) {
      console.log('in setIndexForDetails');
      index = $index;
      prevView = media;
      console.log('item at arr[' + index + '], type = ' + media);
    }
  }]);

// FUNCTIONS ===================================================================
// enable/disable 'active' state of <li> media resource options
var changeClass = function(obj) {
  console.log('in changeClass');
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

var arr = [];
var createArrayFromData = function(JSON, media) {
  console.log('in createArrayFromData');
  console.log(media);
  arr = [];

  for (var i = JSON.feed.entry.length - 1; i >= 0; i--) {
    var obj         = {};
    var entry       = JSON.feed.entry[i];
    obj.url         = entry['id'].label;
    obj.image       = entry['im:image'][0].label;
    obj.imageBig    = entry['im:image'][2].label;
    obj.name        = entry['im:name'].label;
    obj.price       = entry['im:price'].label;
    obj.artist      = entry['im:artist'].label;
    obj.genre       = entry['category'].attributes.label;
    obj.releaseDate = entry['im:releaseDate'].attributes.label;

    if (media == 'Movies' || media == 'TV Shows') {
      obj.summary   = entry['summary'].label;
    }

    arr.push(obj);
  };

  console.log(arr);
  return arr;
}