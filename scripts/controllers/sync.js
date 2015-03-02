'use strict';

/**
 * @ngdoc function
 * @name angularSEOApp.controller:SyncController
 * @description
 * # Sync Controller
 * Controller of the angularSEOApp
 */
angular.module('angularSEOApp')
    .controller('SyncController', ['$scope', function($scope) {
        $scope.synchronousData = {
            string: 'This is synchronous text',
            array: [
                'synchronous item 1',
                'synchronous item 2',
                'synchronous item 3',
                'synchronous item 4',
                'synchronous item 5'
            ]
        };

        $scope.code =
            "angular.module('angularSEOApp').controller('SyncController', ['$scope', function($scope) {\n" +
            "   $scope.synchronousData = {\n" +
            "       string: 'This is synchronous text',\n" +
            "       array: [\n" +
            "           'synchronous item 1',\n" +
            "           'synchronous item 2',\n" +
            "           'synchronous item 3',\n" +
            "           'synchronous item 4',\n" +
            "           'synchronous item 5'\n" +
            "       ]\n" +
            "   };\n" +
            "}]);";
    }]);
