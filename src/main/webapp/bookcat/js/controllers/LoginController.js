(function () {
    "use strict";
    
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








