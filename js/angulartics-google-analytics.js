/**
 * @license Angulartics v0.17.2
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Universal Analytics update contributed by http://github.com/willmcclellan
 * License: MIT
 */
!function(a){"use strict";a.module("angulartics.google.analytics",["angulartics"]).config(["$analyticsProvider",function(b){b.settings.trackRelativePath=!0,b.settings.ga={additionalAccountNames:void 0},b.registerPageTrack(function(c){window._gaq&&_gaq.push(["_trackPageview",c]),window.ga&&(ga("send","pageview",c),a.forEach(b.settings.ga.additionalAccountNames,function(a){ga(a+".send","pageview",c)}))}),b.registerEventTrack(function(c,d){if(d&&d.category){if(d.value){var e=parseInt(d.value,10);d.value=isNaN(e)?0:e}if(window.ga){for(var f={eventCategory:d.category||null,eventAction:c||null,eventLabel:d.label||null,eventValue:d.value||null,nonInteraction:d.noninteraction||null},g=1;20>=g;g++)d["dimension"+g.toString()]&&(f["dimension"+g.toString()]=d["dimension"+g.toString()]),d["metric"+g.toString()]&&(f["metric"+g.toString()]=d["metric"+g.toString()]);ga("send","event",f),a.forEach(b.settings.ga.additionalAccountNames,function(a){ga(a+".send","event",f)})}else window._gaq&&_gaq.push(["_trackEvent",d.category,c,d.label,d.value,d.noninteraction])}})}])}(angular);