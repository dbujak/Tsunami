/**
 * Tsunami Tools namespace (globals)
 */
window.tsunami = window.tsunami || {};

/**
 * Application parameters (region, selected language, map center and zoom level, etc)
 */
tsunami.params = tsunami.params || {};

/**
 * Initialize application parameters
 */
tsunami.initParams = function() {
	// URL parameters
	tsunami._parseParams();

	// Apply parameters associated with place if a place name is specified through 
	// the version 1 compatible parameter "mapname"
	if (tsunami.params.mapname) {
		tsunami.params.mapname = tsunami.params.mapname.toUpperCase();
		tsunami._applyPlaceParams();
	}
	// Apply parameters associated with location if address is specified 
	if (tsunami.params.address){
		// check if city and zip present (old version)
		if (tsunami.params.city){
			tsunami.params.address = tsunami.params.address + ", " + tsunami.params.city;
		}
		if (tsunami.params.zip){
			tsunami.params.address = tsunami.params.address + ", " + tsunami.params.zip;
		}
		// will call search from the controller
	}

	// Apply default parameters and overwrite invalid parameters if necessary
	tsunami._applyDefaultParams();
};

/**
 * Apply parameters if one of the predefined place names is specified through
 * the version 1 compatible parameter "mapname"
 */
tsunami._applyPlaceParams = function() {
	var params = tsunami.params;

	// Predefined place names are defined for Hawai'i by default.
	if (params.region == null || tsunami.regions[params.region] == null) {
		params.region = "HI";
	}

	if (tsunami.places && tsunami.places[params.region] && tsunami.places[params.region][params.mapname]) {
		// Place is predefined.
		var place = tsunami.places[params.region][params.mapname];
		params.center = place.center;
		params.zoom = place.zoom;
	} else {
		// Place name is not predefined.
		// Default to location search instead if no location is specified
		if (!params.location) {
			params.location = params.mapname;
		} else {
			window.alert('Unknown place name ignored: ' + params.mapname);
		}
		params.mapname = null;
	}

};


/**
 * Apply default parameters if they are missing and overwrite parameters if they are inappropriate
 */
tsunami._applyDefaultParams = function() {
	var params = tsunami.params;

	// Default to the first if none is specified or the specified is not valid
	if (params.region == null || tsunami.regions[params.region] == null) {
		params.region = tsunami.regions.regions[0].abbr;
	}

	// Default to the first if none is specified or the specified is not valid
	if (params.lang == null || tsunami.regions[params.region].languages.indexOf(params.lang) < 0) {
		params.lang = tsunami.regions[params.region].languages[0];
	}

	// Default to the center of region if none is specified or the specified is not valid
	if (params.center) {
		var latlong = params.center.split(',');
		if (latlong.length != 2 || isNaN(Number(latlong[0])) || isNaN(Number(latlong[1]))) {
			// Invalid center parameter
			params.center = null;
		}
	}
	params.center = params.center || tsunami.regions[params.region].map.center;

	// Default to the zoom of region if none is specified or the specified is not valid
	if (params.zoom == null || isNaN(Number(params.zoom)) || Number(params.zoom) < 1) {
		params.zoom = tsunami.regions[params.region].map.zoom;
	}

	// Default to the default map type of region if none is specified or the specified is not valid
	if (params.maptype == null || google.maps.MapTypeId[params.maptype.toUpperCase()] == null) {
		params.maptype = tsunami.regions[params.region].map.maptype;
	}

	// Default to the first if none is specified or the specified is not valid
	if (params.page == null || tsunami.contents.pages.indexOf(params.page) < 0) {
		params.page = tsunami.contents.pages[0];
	}

	// Default to the first if none is specified or the specified is not valid
	if (params.infotab == null || tsunami.contents.infotabs.indexOf(params.infotab) < 0) {
		params.infotab = tsunami.contents.infotabs[0];
	}

	params.location = params.location || null;

	//alert(JSON.stringify(params, null, 2));
};

/**
 * Parse application parameters from URL
 */
tsunami._parseParams = function() {
	var query = null;
	if (window.location.search != null && window.location.search.length > 1) {
		query = window.location.search.substr(1);
	} else if (window.location.href.indexOf('?' > 0)) {
		query = window.location.href.split('?')[1];
	}
	if (query) {
		var params = query.split("&");
		for (var i = 0; i < params.length; i ++) {
			var param = params[i].split("=");
			tsunami.params[param[0].toLowerCase()] = decodeURIComponent(param[1]).replace(/\+/g, " "); // replace + with space
		}
	}
};

/**
 * Compose the URL that would serve as the bookmark of the current page
 */
tsunami.composePageUrl = function() {
	// Prepare application parameters
	var params = tsunami.params;
	if (tsunami.map) {
		var center = tsunami.map.getCenter();
		params.center = center.lat() + ',' + center.lng();
		params.zoom = tsunami.map.getZoom();
		params.maptype = tsunami.map.getMapTypeId();
	}
	params.location = tsunami.getMarkerLocation();

	// Join parameters (ignore local, temp parameters whose name is prefixed with underscore)
	var query = null;
	for (var param in params) {
		if (param && param.charAt(0) != '_') {
			var value = params[param];
			if (value == 0 || value) {
				query = (query == null ? '' : query + '&') + param + '=' + encodeURIComponent(value);
			}
		}
	}

	// Concatenate with source URL
	var url = window.location.href.split('?')[0] + '?' + query;
	//alert('Page url: \n' + url);
	return url;
};
