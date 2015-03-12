'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MainCtrl', MainCtrl);

/**
 * Main controller for the application
 */
function MainCtrl($scope, $location, $anchorScroll, $analytics) {
  // set region to Hawaii - will overwrite later based on location (if possible)
  tsunami.params.region = 'HI';

  $scope.indexModel = {
    address: ''
  };
  // object to deal with figuring out location using geolocation
  var objGeoLocation = {
    getCurrentPositionError: function(error) { // Call back from navigator.geolocation.getCurrentPosition for error
      // mock up possition within US continental and send it to success function
      var position = {
        coords: {
          latitude: 29, 
          longitude: -81
        }
      };
      objGeoLocation.getCurrentPosition(position)
      return;

        switch(error.code) {
            case error.PERMISSION_DENIED:
                // "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                // "Location information is unavailable."
                break;
            case error.TIMEOUT:
                // "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                // "An unknown error occurred."
                break;
        }
    },
    getCurrentPosition: function(position) { // Call back from navigator.geolocation.getCurrentPosition for sucess
      var geocoder = new google.maps.Geocoder();
      var location = {
        'location': {
          'lat': position.coords.latitude,  // guam 13.5
          'lng': position.coords.longitude  // guam 144.8
        }
      };
      
      geocoder.geocode(location, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          // loop through results and find Country for type
          for (var i = 0; i < results.length; i++){
            if (results[i].types[0] == 'country'){
              if (results[i].formatted_address == 'Guam'){
                $scope.switchRegion('GU')
                $scope.$apply();
                break;
              }
            }
          }
        }

      });

    }    
  }


  // Prepare to share the current page
  $scope.prepareShare = function() {
    $scope.shareLink = tsunami.composePageUrl();
    $scope.shareLinkEncoded = encodeURIComponent($scope.shareLink);

    var shareText = tsunami.strings[params.lang].share_text;
    var location = tsunami.getMarkerLocation();
    if (location) {
      var locationTemplate = tsunami.strings[params.lang].share_text_location;
      shareText = shareText + locationTemplate.replace('{location}', location);
    }
    $scope.shareText = shareText;
    $scope.shareTextEncoded = encodeURIComponent(shareText);
  };


  $scope.mainNav = function (page) { 
    $analytics.pageTrack(page);
    tsunami.params.page = page;
  }

  $scope.tsunamiInfoNav = function (tab) { 
    $analytics.pageTrack(tab);
    tsunami.params.infotab = tab;
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  $scope.switchRegion = function (region) { 
    $analytics.pageTrack('region=' + region);
    tsunami.switchRegion(region);
  }

  $scope.geocode = function (address) { 
    $analytics.pageTrack('searchPerfomed');
    tsunami.geocodeAddress(address);
  }
  $scope.geocodeEnter = function (e) { 
    $analytics.pageTrack('searchPerfomed');
   if(e.keyCode == 13){
    $scope.geocode();
   }
  }

  $scope.applyLang = function(lang) {
    $scope.params.lang = lang;
    tsunami.updateContents(lang);
  };

  $scope.scrollTop =  function(){
    $location.hash('pageTop');

        // call $anchorScroll()
        $anchorScroll();
  }


  appInitialize();

  // Try to get location of the users and default to that region
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(objGeoLocation.getCurrentPosition, objGeoLocation.getCurrentPositionError);
  }








  function appInitialize(){
    // Initialize application parameters
    tsunami.initParams();
    var params = tsunami.params;

    // Expose some of the main functionality to scope for convenient access
    $scope.regions = tsunami.regions;
    $scope.contents = tsunami.contents;
    $scope.strings = tsunami.strings;
    $scope.updateContents = tsunami.updateContents;

    // Link application parameters and content URLs to scope so that their
    // changes can be watched by angularjs
    $scope.params = tsunami.params;

    // Initialize map with the default region
    tsunami.switchRegion(tsunami.params.region);

    // check if search coming from external site
    if (tsunami.params.address){
      $analytics.pageTrack('incomingExternalSearch');
      $scope.indexModel.address = tsunami.params.address;
      $scope.geocode(tsunami.params.address);
    }

  }



}