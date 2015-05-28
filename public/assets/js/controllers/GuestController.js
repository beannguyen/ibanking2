MetronicApp.controller('GuestController', function($rootScope, $scope, AuthenticationService) {
    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        Metronic.initAjax();

        // set default layout mode
        $rootScope.settings.layout.pageSidebarClosed = false;
    });

    $scope.credential = {};

    $scope.login = function () {
        AuthenticationService.login($scope.credential)
            .success(function(response) {
                console.log(response);
            })
            .error(function(response) {

            });
    }
});
