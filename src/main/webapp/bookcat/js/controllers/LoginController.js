(function () {
    "use strict";

   /* angular.module('app')
        .controller('LoginController', ['$scope' , '$http', '$log', '$cookieStore', '$location', function ($scope, $http, $log, $cookieStore, $location) {
            $scope.errorMsg = null;

            $scope.logUser = function () {
                $http.post('/api/login', {login: $scope.login, password: $scope.password})
                    .success(function (user) {
                        $log.info('Authentication successed !');
                        $cookieStore.put('user', user);
                        $location.path('/');

                    })
                    .error(function (reason) {
                            $log.error('unable to log  ' + reason);
                            $scope.errorMsg = "Bad Login and/or password";
                    });

            };
        }]);*/
    
    angular.module('app').controller('LoginController', [ '$rootScope','$scope', '$location','AuthenticationSharedService',
                                       function ( $rootScope,$scope, $location,AuthenticationSharedService)  {
    	 								   $scope.errorMsg = null;	
                                           $scope.logUser = function () {
                                               AuthenticationSharedService.login({
                                                   username: $scope.login,
                                                   password: $scope.password,
                                             
                                               }).then(function () {
                                                   $scope.authenticationError = false;
                                                   $rootScope.authenticated = true;
                                                   $location.path("/");
                                               }).catch(function () {
                                                   $scope.authenticationError = true;
                                                   $rootScope.authenticated = false;
                                               });
                                           }
                                       }]);

    angular.module('app').controller('LogoutController', ['$location', 'AuthenticationSharedService',
                                     function ($location, AuthenticationSharedService) {
                                          AuthenticationSharedService.logout();
                                       }]);
})();








