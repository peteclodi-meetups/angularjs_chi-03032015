'use strict';

/**
 * @ngdoc function
 * @name angularSEOApp.controller:Slide4
 * @description
 * # Slide 4 Controller
 * Controller of the angularSEOApp
 */
angular.module('angularSEOApp')
    .controller('Slide4Controller', ['$scope', '$http', function($scope, $http) {
        // 1 === client software
        // 2 === Angular-SEO
        // 3 === Angular-SEO Controller Interceptor
        var maxPartialIndex = 3;
        $scope.showPartial = 1;
        $scope.switchPartial = function($event) {
            if($event.ctrlKey) { // Move back
                if ($scope.showPartial > 1) {
                    $scope.showPartial--;
                }
            }
            else { // Move forward
                if($scope.showPartial < maxPartialIndex) {
                    $scope.showPartial++;
                }
            }
        };

        $scope.routeCode =
        ".when('/sync',\n" +
        "   templateUrl: 'views/sync.html',\n" +
        "   controller: ['$scope', 'SEOControllerInterceptor', function($scope, SEOControllerInterceptor) {\n" +
        "       SEOControllerInterceptor.intercept('SyncController', $scope);\n" +
        "   }]\n" +
        "})\n" +
        ".when('/async',\n" +
        "   templateUrl: 'views/async.html',\n" +
        "   controller: ['$scope', 'SEOControllerInterceptor', function($scope, SEOControllerInterceptor) {\n" +
        "       SEOControllerInterceptor.intercept('AsyncController', $scope, true);\n" +
        "   }]\n" +
        "})";

        $scope.seoControllerInterceptorCode =
            "angular.module('...')\n" +
            "   .factory('SEOControllerInterceptor', ['$controller', '$q', function ($controller, $q) {\n" +
            "       return {\n" +
            "           intercept: function(controllerName, scope, isAsyncDataController) {\n" +
            "               $q(function(resolve) {\n" +
            "                   scope.resolveAllData = resolve;\n" +
            "                   $controller(controllerName, {$scope: scope});\n" +
            "                   if(angular.isUndefined(isAsyncDataController) || !isAsyncDataController) {\n" +
            "                       scope.resolveAllData();\n" +
            "                   }\n" +
            "               }).then(function() {\n" +
            "                   scope.htmlReady();\n" +
            "               });\n" +
            "           }\n" +
            "       }\n" +
            "}]);";
    }]);
