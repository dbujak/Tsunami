/**
 * Tsunami Tools namespace (globals)
 */
window.tsunami = window.tsunami || {};

/** 
 * Dictionary of URLs of major textual contents plus common strings, which will be set dynamically
 * based on the lists provided below (see tsunami.updateContents() below).
 * 
 * The purpose of this dictionary is to provide a way for angularjs to automatically watch for 
 * changes made to the content URLs and thus automatically reload contents upon URL changes.  The
 * contents can be included as the following.
 *     <div ng-include="contents.thingstoknow"></div>
 *
 * We cannot directly compose the URLs inside the "ng-include" directives (see below).  This does 
 * not work because the value of the directive will be evaluated once and the contents won't be
 * automatically reloaded even if the region/language has been changed.
 *     <div ng-include="'partials/' + params.region + '/' + params.lang + '/thingstoknow.html'"></div>
 *
 * (I understand that this is far from perfect, so please let me know if you know any better 
 * solution to this problem.  -- Yanlin)
 * 
 * Since Google Maps API cannot switch language localization after it is loaded, we may choose to
 * reload the page to apply language changes and asynchronously load Google Maps API according to
 * the language detected at page loading time.  If this is the way to go, we may also opt to reload
 * the page upon region selection so that we don't have to worry about content refreshing, thus eliminate
 * the need for the content URLs.
 */
tsunami.contents = {
	pages: [
		'map', 
		'info'
	],
	infotabs: [
		'tsunamiwarning',
		'tsunamievacuation', 
		'tsunamiplan', 
		'tsunamirisk', 
	],
	contents: [
		'tsunamiwarning', 
		'tsunamievacuation', 
		'tsunamiplan', 
		'tsunamirisk', 
		'aboutmap', 
		'thingstoknow',
		'strings'
	]
};

// Update URLs of page contents
tsunami.updateContents = function(lang) {
	lang = lang || tsunami.params.lang;
	var path = 'partials/' + tsunami.params.region + '/' + lang + '/';

	// Contents
	$.each(tsunami.contents.contents, function(i, name) {
		var url = path + name + '.html';
		if (tsunami.contents[name] != url) {
			tsunami.contents[name] = url;
		}
	});
};

// Update content URLs for
//tsunami.updateContents();
