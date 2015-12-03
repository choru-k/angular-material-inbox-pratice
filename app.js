var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppController', function($mdSidenav, $scope) {
    var vm = this;

    $scope.nav = true;
    $scope.click_toggle = function(){
        $scope.nav = !$scope.nav;
        console.log($scope.nav);
    };
    vm.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };

});

app.config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('red')
        .accentPalette('red')
        .warnPalette('red');
});