'use strict';

/**
 * @ngdoc function
 * @name angularSEOApp.controller:Slide8
 * @description
 * # Slide 8 Controller
 * Controller of the angularSEOApp
 */
angular.module('angularSEOApp')
    .controller('Slide8Controller', ['$scope', '$http', function($scope, $http) {
        // 1 === Synchronous Escaped Fragment
        // 2 === Asynchronous Escaped Fragment
        var maxPartialIndex = 2;
        $scope.showPartial = 1;
        $scope.switchPartial = function($event) {
            if($event.ctrlKey) { // Move back
                if ($scope.showPartial > 1) {
                    $scope.showPartial--;
                    $scope.crawledHTML = '';
                }
            }
            else { // Move forward
                if($scope.showPartial < maxPartialIndex) {
                    $scope.showPartial++;
                    $scope.crawledHTML = '';
                }
            }
        };
        $scope.testEscapedFragment = function(route) {
            $http.get('http://seo.angular.local/?_escaped_fragment_=' + route)
                .success(function(data) {
                    $scope.crawledHTML = data;
                });
        };
    }]);
