'use strict';

/**
 * @ngdoc function
 * @name angularSEOApp.controller:Slide2
 * @description
 * # Slide 2 Controller
 * Controller of the angularSEOApp
 */
angular.module('angularSEOApp')
    .controller('Slide2Controller', ['$scope', function($scope) {
        // 1 === prerender
        // 2 === diy
        var maxPartialIndex = 2;
        $scope.showPartial = 1;
        $scope.switchPartial = function($event) {
            if($event.ctrlKey) { // Move back
                if ($scope.showPartial > 1) {
                    $scope.showPartial--;
                }
            }
            else { // Move forward
                if ($scope.showPartial < maxPartialIndex) {
                    $scope.showPartial++;
                }
            }
        };
    }]);
