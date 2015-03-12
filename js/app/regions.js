/**
 * Tsunami Tools namespace (globals)
 */
window.tsunami = window.tsunami || {};

/**
 * List of regions (wrapped in a lookup object, see below)
 */
tsunami.regions = {
    // Evacuation zones for all regions (not region specific)
    evacuationZones: ['http://webqa.csc.noaa.gov/tsunami-toolv2/data/TsunamiEvacuationZones_GU_HI_20140701.kmz'],
    regions: [{
            abbr: 'GU',
            name: 'Guam',
            languages: ['en', 'zh-CN'],
            map: {
                maptype: 'terrain',
                center: "13.4502076,144.7874584",
                zoom: 10
            },
            //evacuationZones: ['data/Guam.kmz'] - Kyle stripped this out, because the 2 layers were overlapping 
        }, {
            abbr: 'HI',
            name: 'Hawai\'i',
            languages: ['en', 'zh-CN'],
            map: {
                maptype: 'roadmap',
                center: "21.3114,-157.7964",
                zoom: 7
            },
            //evacuationZones: ['data/HawaiiEvacuationZones20131028.kmz'] - Kyle stripped this out, because the 2 layers were overlapping 
        }
        /*,
		{
			abbr: 'MP',
			name: 'Commonwealth of the Northern Mariana Islands (CNMI)'
			languages: ['en'],
			map: {}
		},
		{
			abbr: 'AS',
			name: 'Amarican Samoa'
			languages: ['en'],
			map: {}
		}
		*/
    ]
};
// Turn the array of regions into a region dictionary for easier lookup
(function() {
    $.each(tsunami.regions.regions, function(i, region) {
        tsunami.regions[region.abbr] = region;
    });
})();

/**
 * Switch region
 */
tsunami.switchRegion = function(region) {
    if (!tsunami.regions[region]) {
        alert('Unknown region: ' + region);
        return;
    }

    // Evacuation zone layers specific to the current region (if any)
    if (tsunami.map) {
        tsunami.removeEvacuationZones();
    }

    // Application parameters
    if (tsunami.params.region != region) {
        // Update region-specific parameters if a different region is specified
        tsunami.params.region = region;
        tsunami.params.lang = tsunami.getLangForRegion(region);
        tsunami.params.maptype = tsunami.regions[region].map.maptype;
        tsunami.params.center = tsunami.regions[region].map.center;
        tsunami.params.zoom = tsunami.regions[region].map.zoom;

        // Reset last successful search results or place name
        tsunami.clearMarker();
    }
    //window.alert('Parameters: \n' + JSON.stringify(tsunami.params, null, 2));
    tsunami.updateContents();

    // Add Tsunami Evacuation Zones Layer(s)
    tsunami._mapRegion();
     
    // Evacuation zone
    tsunami.addEvacuationZones();
};

/**
 * Map the selected region
 *
 * If the map has been initialized, center to the new region.  Otherwise, initialize map and center to region.
 */
tsunami._mapRegion = function() {
    var center = tsunami.params.center.split(',');
    center = new google.maps.LatLng(center[0], center[1]);
    var zoom = Number(tsunami.params.zoom);
    var maptype = google.maps.MapTypeId.ROADMAP;
    if (tsunami.params.maptype && google.maps.MapTypeId[tsunami.params.maptype.toUpperCase()]) {
        maptype = google.maps.MapTypeId[tsunami.params.maptype.toUpperCase()];
    }

    if (tsunami.map) {
        // Update map type/center/zoom
        tsunami.map.setMapTypeId(maptype);
        tsunami.map.panTo(center);
        tsunami.map.setZoom(zoom);
    } else {
        tsunami._initMap(center, zoom, maptype);
    }
};

/**
 * Initialize map to region defined by application parameters, plus 
 *   - Setting up geocoder,
 *   - Setting up autocomplete for location search,
 *   - Loading global evacuation zones, and
 *   - Displaying place or restoring search results if any
 */
tsunami._initMap = function(center, zoom, maptype) {
    // Initialize map and set map type/center/zoom level
    tsunami.geocoder = new google.maps.Geocoder();
    tsunami.map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: zoom,
        mapTypeId: maptype
    });

    // Set up autocomplete for geo-search
    tsunami.setupSearchAutocomplete(tsunami.map);

    // Load evacuation zones for all regions (if any)
    if (tsunami.regions.evacuationZones) {
        $.each(tsunami.regions.evacuationZones, function(i, url) {
            tsunami.addEvacuationZoneLayer(url);
        });
    }

    // Display place marker or restore search results if any
    if (tsunami.params.mapname) {
        // Display place marker
        tsunami.marker = new google.maps.Marker({
            map: tsunami.map,
            position: center,
            title: tsunami.params.mapname
        });
    } else if (tsunami.params.location) {
        // Restore search results
        $('#pac-input').val(tsunami.params.location);
        tsunami.geocodeAddress(tsunami.params.location);
    }
};

/**
 * Get the most reasonable language for a specified region, in following order:
 * 1. Current language if it is available for specified region
 * 2. Language last selected for the region (if any)
 * 3. First language in the list of available languages for the region
 */
tsunami.getLangForRegion = function(region) {
    var lang = tsunami.params.lang;
    if (tsunami.regions[region].languages.indexOf(lang) < 0) {
        lang = tsunami.regions[region].lang || tsunami.regions[region].languages[0];
    }
    return lang;
};

/**
 * Remove evacuation zone layers (if any)
 */
tsunami.removeEvacuationZones = function() {
    if (tsunami._loadedEvacuationZones) {
        $.each(tsunami._loadedEvacuationZones, function(i, kmlLayer) {
            kmlLayer.setMap(null);
        });
        tsunami._loadedEvacuationZones = [];
    }
};

/**
 * Add (visible) evacuation zone layers for the current region
 */
tsunami.addEvacuationZones = function() {
    tsunami._loadedEvacuationZones = [];
    // TODO: Wrap into a function so that we can register en event listener to load visible
    // zones dynamically
    if (tsunami.regions[tsunami.params.region].evacuationZones) {
        $.each(tsunami.regions[tsunami.params.region].evacuationZones, function(i, url) {
            // TODO: Check bounds to load only visible layers
            //alert('Evacuation layer URL: ' + url);
            var kmlLayer = tsunami.addEvacuationZoneLayer(url);
            tsunami._loadedEvacuationZones.push(kmlLayer);
        });
    }
};

/**
 * Add the specified evaculation zone layer (KML/KMZ) to map
 */
tsunami.addEvacuationZoneLayer = function(url) {
    url = _canonicalizeUrl(url);
    var kmlLayer = new google.maps.KmlLayer({
        url: url,
        map: tsunami.map,
        //clickable: false,
        preserveViewport: true,
        //supressInfoWindows: true
    });
    google.maps.event.addListener(kmlLayer, 'status_changed', function() {
        if (kmlLayer.getStatus() != google.maps.KmlLayerStatus.OK) {
            window.alert('Failed to load evacuation zone layer.' + 
                '\n\nURL: ' + url +
                '\n\nError: ' + kmlLayer.getStatus()
                );
        }
    });
    return kmlLayer;
};

/**
 * Cononicalize URL (mostly for converting relative URLs to absolute ones)
 * See: http://grack.com/blog/2009/11/17/absolutizing-url-in-javascript/
 */
function _canonicalizeUrl(url) {
    var div = document.createElement('div');
    div.innerHTML = "<a></a>";
    div.firstChild.href = url; // Ensures that the href is properly escaped
    div.innerHTML = div.innerHTML; // Run the current innerHTML back through the parser
    return div.firstChild.href;
}