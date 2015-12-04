var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppController', function($scope) {

    //테스트 데이터를 만들었다
    $scope.emails = [
        {from: "kang",
            title: "Title-kang",
            context: "this is context"},
        {from: "lee",
            title: "Title-lee",
            context: "this is context"},
        {from: "wow",
            title: "Title",
            context: "this is context"},
        {from: "wow",
            title: "Title",
            context: "this is context"},
        {from: "wow",
            title: "Title",
            context: "this is context"},
        {from: "wow",
            title: "Title-1",
            context: "this is context"},
        {from: "wow",
            title: "Title",
            context: "this is context"},
        {from: "wow",
            title: "Title",
            context: "this is context"},
        {from: "wow",
            title: "Title",
            context: "this is context"},
        {from: "wow",
            title: "Title",
            context: "this is context"},
        {from: "wow",
            title: "Title-4",
            context: "this is context"},
        {from: "wow",
            title: "Title",
            context: "this is context"},
        {from: "wow",
            title: "Title",
            context: "this is context"},
        {from: "wow",
            title: "Title",
            context: "this is context"},
        {from: "wow",
            title: "Title",
            context: "this is context"},
        {from: "wow",
            title: "Title",
            context: "this is context"},
        {from: "wow",
            title: "Title",
            context: "this is context"},
        {from: "wow",
            title: "Title",
            context: "this is context"}
    ];

    //사이드바 열고 닫기를 할수 있게함. 아직은 animation 추가 안함
    $scope.nav = true;
    $scope.click_toggle = function(){
        $scope.nav = !$scope.nav;
        console.log($scope.nav);
    };

    $scope.now_mail_view = false;
    $scope.up_mail_box = $scope.emails;
    $scope.down_mail_box = [];
    $scope.mail_click = function (index) {
        $scope.up_mail_box = $scope.emails.slice(0,index);
        $scope.now_mail = $scope.emails[index];
        $scope.down_mail_box = $scope.emails.slice(index+1,$scope.emails.length);
        $scope.now_mail_view = true;
        $scope.now_mail_index = index;
    };

    $scope.star_show = false;
    $scope.star_click = function () {
        $scope.star_show = !$scope.star_show;
    };

});

//전체적인 테마색을 red로 바꾸었다 이부분은 자기가 색깔을 조금씩 바꿔보면 바로 알것이다
app.config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('red')
        .accentPalette('red')
        .warnPalette('red');
});