'use strict';

/**
 * @ngdoc function
 * @name angularSEOApp.controller:AsynchController
 * @description
 * # Asynch Controller
 * Controller of the angularSEOApp
 */
angular.module('angularSEOApp')
    .controller('AsyncController', ['$scope', '$timeout', function($scope, $timeout) {
        $timeout(function() {
            $scope.asynchronousData = {
                string: 'This is asynchronous text',
                array: [
                    'asynchronous item 1',
                    'asynchronous item 2',
                    'asynchronous item 3',
                    'asynchronous item 4',
                    'asynchronous item 5'
                ]
            };
        }, 5000);

        $scope.$watch('asynchronousData', function() {
            if(angular.isDefined($scope.asynchronousData)) {
                $scope.resolveAllData();
            }
        });

        $scope.code =
            "angular.module('angularSEOApp')\n" +
            "   .controller('AsyncController', ['$scope', '$timeout', function($scope, $timeout) {\n" +
            "       $timeout(function() {\n" +
            "           $scope.asynchronousData = {\n" +
            "               string: 'This is asynchronous text',\n" +
            "               array: [ 'asynchronous item 1', 'asynchronous item 2', 'asynchronous item 3',\n" +
            "                        'asynchronous item 4', 'asynchronous item 5' ]\n" +
            "           };\n" +
            "       }, 5000);\n" +
            "       $scope.$watch('asynchronousData', function() {\n" +
            "           if(angular.isDefined($scope.asynchronousData)) { $scope.resolveAllData(); }\n" +
            "       });\n" +
            "}]);";
    }]);
