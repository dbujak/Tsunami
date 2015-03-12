'use strict';

/* Directives */


angular.module('myApp.directives', []).
directive('hideOnclickout', function($document) {
    return {
        restrict: 'A',
        link: function(scope, elem, attr, ctrl) {
            elem.bind('click', function(e) {
                e.stopPropagation();
            });
            $document.bind('click', function() {
                scope.$apply(attr.hideOnclickout);
            });
        }
    };
});