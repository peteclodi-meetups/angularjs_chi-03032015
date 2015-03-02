'use strict';

/**
 * @ngdoc function
 * @name angularSEOApp.service:SEOControllerInterceptor
 * @description
 * # SEO Controller Interceptor
 * Service of the angularSEOApp
 */
angular.module('angularSEOApp')
    .factory('SEOControllerInterceptor',
    ['$controller', '$q', function ($controller, $q) {
        return {
            intercept: function(controllerName, scope, isAsyncDataController) {
                $q(function(resolve) {
                    scope.resolveAllData = resolve;
                    $controller(controllerName, {$scope: scope});
                    if(angular.isUndefined(isAsyncDataController) || !isAsyncDataController) {
                        scope.resolveAllData();
                    }
                }).then(function() {
                    scope.htmlReady();
                });
            }
        }
    }]);
