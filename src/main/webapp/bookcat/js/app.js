var baseUrl;
(function () {
    "use strict";

    var app = angular.module('app', [ 'ngCookies', 'ngRoute', 'ui.bootstrap', 'pascalprecht.translate']);

    /** Services configuration */
    app.config(
        [
            '$routeProvider',
            '$locationProvider',
            '$translateProvider',
            function ($routeProvider, $locationProvider, $translateProvider) {
                $locationProvider.html5Mode(false);

                baseUrl = window.location.origin + window.location.pathname + "bookcat/";
                
                $routeProvider.when('/', {
                    templateUrl: baseUrl + 'templates/views/home.html',
                    controller: 'HomeController',
                    access: null
                }).when('/login', {
                    templateUrl: baseUrl + 'templates/views/login.html',
                    controller: 'LoginController',
                    access: null
                }).when('/books', {
                    templateUrl: baseUrl + 'templates/views/catalog.html',
                    controller: 'CatalogController',
                    access: null
                }).when('/book/:id', {
                    templateUrl: baseUrl + 'templates/views/detail.html',
                    controller: 'DetailController',
                    access: null
                }).when('/basket', {
                    templateUrl: baseUrl + 'templates/views/basket.html',
                    controller: 'BasketController',
                    access: null
                }).when('/profile', {
                    templateUrl: baseUrl + 'templates/views/profile.html',
                    controller: 'ProfileController',
                    access: null
                }).when('/404', {
                    templateUrl: baseUrl + 'templates/views/404.html',
                    access: null
                }).otherwise({
                    redirectTo: '/404'
                });

                $translateProvider.translations('en', {
                    "_Slogan": "All the books you need, at the highest price!",
                    "_Basket_Items_": "item(s) in your basket",
                    "_Logout_": "Logout",
                    "_Sign_In_": "Sign-in"
                });
                $translateProvider.translations('fr', {
                    "_Slogan": "All the books you need, at the highest price!",
                    "_Basket_Items_": "item(s) in your basket",
                    "_Logout_": "Logout",
                    "_Sign_In_": "Sign-in"
                });
            }
        ]).run(function run( $http, $cookies ){
        $http.defaults.headers.common.Authentication = $cookies.token;
    });
})();