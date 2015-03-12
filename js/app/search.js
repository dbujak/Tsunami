/**
 * Tsunami Tools namespace (globals)
 */
window.tsunami = window.tsunami || {};

/**
 * Set up autocomplete for geo-search
 */
tsunami.setupSearchAutocomplete = function() {
	var input = document.getElementById('pac-input');
	 
	var autocomplete = new google.maps.places.Autocomplete(input);
	autocomplete.bindTo('bounds', tsunami.map);

	//var infowindow = new google.maps.InfoWindow();
	 
	google.maps.event.addListener(autocomplete, 'place_changed', function() {
		//infowindow.close();
		var place = autocomplete.getPlace();
		tsunami._displayPlace(place);

	    var address = '';
	    if (place.address_components) {
	      address = [
	        (place.address_components[0] && place.address_components[0].short_name || ''),
	        (place.address_components[1] && place.address_components[1].short_name || ''),
	        (place.address_components[2] && place.address_components[2].short_name || '')
	      ].join(' ');
	    }

	    /*infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
	    infowindow.open(tsunami.map, tsunami.marker);*/
	  });
};

/**
 * Geocodes location specified in #geocodeInput
 * Gets called from controller.js:$scope.geocode
 * @return {[type]} [description]
 */
tsunami.geocodeAddress = function (address) {
	// bad coding practice to access address from the view using jquery... atempting to mitigate the issue, but keep the if statement so things don't break...
	var location;
	
	if (address != undefined && address!=""){
		location = address;
	}
	else {
		 location = $('#pac-input').val();
	}

	tsunami.geocoder.geocode( { 'address': location}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			tsunami._displayPlace(results[0]);
		} else {
			alert('Geocode was not successful for the following reason: ' + status);
		}
	});
};

/**
 * Display place and center it on map
 */
tsunami._displayPlace = function(place) {
	// Hide previous marker
	if (tsunami.marker) tsunami.marker.setVisible(false);

	// Validate place and its geometry
	//alert(JSON.stringify(place, null, 2));
	if (!place || !place.geometry) return;

	// Save successfully search (for purpose of bookmarking)
	tsunami._markerLocation = $('#pac-input').val();
	if (tsunami.params.mapname) {
		// Reset specified place name
		tsunami.params.mapname = null;
	}

	// If the place has a geometry, then present it on a map.
	if (place.geometry.viewport) {
		tsunami.map.fitBounds(place.geometry.viewport);
	} else {
		tsunami.map.setCenter(place.geometry.location);
		tsunami.map.setZoom(17);  // Why 17? Because it looks good.
	}

	// Create or update the marker, and make it visible
	if (tsunami.marker) {
		tsunami.marker.setPosition(place.geometry.location);
		tsunami.marker.setVisible(true);
		tsunami.marker.setTitle(tsunami._markerLocation);
	} else {
		tsunami.marker = new google.maps.Marker({
			map: tsunami.map,
			position: place.geometry.location,
			title: tsunami._markerLocation
		});
		tsunami.marker.setVisible(true);

		// Alert for the first time
		// alert(tsunami.strings[tsunami.params.lang].search_warning);	
	}
};

/**
 * Clear the marker (predefined places or result of geo-search)
 */
tsunami.clearMarker = function() {
    tsunami.params.location = null;
    tsunami.params.mapname = null;
    if (tsunami.marker) {
    	tsunami.marker.setVisible(false);
    }
};

/**
 * Get the location of the currently visible marker, as the result of the last successful geosearch
 */
tsunami.getMarkerLocation = function() {
	return (tsunami.marker && tsunami.marker.getVisible()) ? tsunami._markerLocation : null;
};
