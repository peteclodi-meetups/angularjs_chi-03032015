'use strict';

angular
    .module('angularSEOApp', [
        'ngAnimate',
        'ngResource',
        'ngRoute',
        'seo',
        'hljs'
    ])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/0'
            })
            .when('/0', {
                templateUrl: 'views/slide-0.html'
            })
            .when('/1', {
                templateUrl: 'views/slide-1.html',
                controller: 'Slide1Controller'
            })
            .when('/2', {
                templateUrl: 'views/slide-2.html',
                controller: 'Slide2Controller'
            })
            .when('/3', {
                templateUrl: 'views/slide-3.html',
                controller: 'Slide3Controller'
            })
            .when('/4', {
                templateUrl: 'views/slide-4.html',
                controller: 'Slide4Controller'
            })
            .when('/5', {
                templateUrl: 'views/slide-5.html',
                controller: 'Slide5Controller'
            })
            .when('/sync', {
                redirectTo: '/6'
            })
            .when('/6', {
                templateUrl: 'views/sync.html',
                controller: ['$scope', 'SEOControllerInterceptor', function($scope, SEOControllerInterceptor) {
                    SEOControllerInterceptor.intercept('SyncController', $scope);
                }]
            })
            .when('/async', {
                redirectTo: '/7'
            })
            .when('/7', {
                templateUrl: 'views/async.html',
                controller: ['$scope', 'SEOControllerInterceptor', function($scope, SEOControllerInterceptor) {
                    SEOControllerInterceptor.intercept('AsyncController', $scope, true);
                }]
            })
            .when('/8', {
                templateUrl: 'views/slide-8.html',
                controller: 'Slide8Controller'
            })
            .when('/9', {
                templateUrl: 'views/slide-9.html'
            })
            .when('/10', {
                templateUrl: 'views/slide-10.html'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.hashPrefix('!').html5Mode(true);
    }]);
