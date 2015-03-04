(function () {
    "use strict";

    /** Profile view controller 
    angular.module('app')
        .controller('ProfileController', ['$scope', function ($scope) {

            $scope.user = null; // TODO

            $scope.updateUser = function () {
                // TODO
            };
        }]);*/
    
    
    angular.module('app')
    .controller('ProfileController', ['$location','$scope', '$http', '$log', 'Session','AuthenticationSharedService',
        function ($location,$scope, $http, $log, Session, AuthenticationSharedService )
        {
    	
    	 	
            
    	 	$scope.logout = function() {
                AuthenticationSharedService.logout();
            };
            $scope.login = Session.login;

}]);
    
})();