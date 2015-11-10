alert(1)
var sharedModuleComponents = sharedModuleComponents || angular.module('sharedModuleComponents', []);

sharedModuleComponents.directive('filters', function(listService) {
    // define the directive object
    return {

        // restrict = E, signifies that directive is Element directive
        restrict: 'E',

        // template replaces the complete element with its text.
        templateUrl : "bower_components/shared/templates/filter-template/view/filterTemplate.html",

        // scope is used to distinguish each student element based on criteria.

        scope: {
            title: "=",
            mapto: "=",
            listobj: "=",
            selectedval: '='
        },
        link: function(scope, ele, attr) {
            // TODO, refactor this function, based on type with switch case.
            scope.selectedType = [];
            scope.setFilter = function($event, selected, type) {
                $($event.target).closest('div.dropdown-list-sm').removeClass('open');
                listService.setFilters(selected, type);
                scope.selectedval[type] = selected;
            }
            scope.changeFilterDisplayStatus = function($event) {
                if ($($event.target).closest('div.dropdown-list-sm').hasClass('open')) {
                    $($event.target).closest('div.dropdown-list-sm').removeClass('open');
                } else {
                    $('div.dropdown-list-sm').removeClass('open');
                    $($event.target).closest('div.dropdown-list-sm').addClass('open');
                }
            }
        }
    }


});

sharedModuleComponents.directive('filterSkeleton', function(listService) {

    // restrict = E, signifies that directive is Element directive
    return {
        restrict: 'E',

        transclude: true,
        // template replaces the complete element with its text.
        templateUrl: "bower_components/shared/templates/filter-template/view/filterSkeleton.html",

        // scope is used to distinguish each student element based on criteria.

        scope: {
            callFilter: '&applyFilter',
            undoFilter: '&resetFilter'
        },
        link: function(scope, ele, attr) {

        }
    }
});


sharedModuleComponents.directive('dropdownfilter', function(listService) {
    // define the directive object
    return {

        // restrict = E, signifies that directive is Element directive
        restrict: 'E',

        // template replaces the complete element with its text.
        templateUrl : "bower_components/shared/templates/filter-template/view/dropDownFilter.html",

        // scope is used to distinguish each student element based on criteria.

        scope: {
            title: "@",
            mapto: "@",
            listobj: "=",
            selectedval: '='
        },
        link: function(scope, ele, attr) {
            // TODO, refactor this function, based on type with switch case.
            scope.selectedType = [];
            scope.setFilter = function($event, selected, type) {
                listService.setFilters(selected, type);
                scope.selectedval[type] = selected;
            }
            scope.changeFilterDisplayStatus = function($event) {
                if ($($event.target).closest('div.dropdown-list-sm').hasClass('open')) {
                    $($event.target).closest('div.dropdown-list-sm').removeClass('open');
                } else {
                    $('div.dropdown-list-sm').removeClass('open');
                    $($event.target).closest('div.dropdown-list-sm').addClass('open');
                }
            }
        }
    }


});
