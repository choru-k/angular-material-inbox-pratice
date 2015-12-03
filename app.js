var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppController', function($scope) {
    var vm = this;

    //사이드바 열고 닫기를 할수 있게함. 아직은 animation 추가 안함
    $scope.nav = true;
    $scope.click_toggle = function(){
        $scope.nav = !$scope.nav;
        console.log($scope.nav);
    };

    $scope.emails = [
        {from: "kang",
            title: "Title",
            context: "this is context"},
        {from: "lee",
            title: "Title",
            context: "this is context"},
        {from: "wow",
            title: "Title",
            context: "this is context"}
    ];

});

app.config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('red')
        .accentPalette('red')
        .warnPalette('red');
});