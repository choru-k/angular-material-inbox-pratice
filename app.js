var app = angular.module('StarterApp', ['ngMaterial', 'ngAnimate']);
//ngAnimate를 추가하였다. 그래서 custom.css를 보면 ng-hide에 대한 css animation을 쉽게 추가할수 있었다 이게 아니면 class기반으로 추가하여야 한다.
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
    //만약 메일을 클릭하면 위에 메일박스는 클릭한메일바로 전까지, 현재메일은 클릭한 메일, 밑의 메일박스는 클릭한메일뒤부터로 한다. slice통해 배열을 자를수있다.
    //그리고 현재 메일을 보이게 한다
    $scope.mail_click = function (index) {
        $scope.up_mail_box = $scope.emails.slice(0,index);
        $scope.now_mail = $scope.emails[index];
        $scope.down_mail_box = $scope.emails.slice(index+1,$scope.emails.length);
        $scope.now_mail_view = true;
        $scope.now_mail_index = index;
    };
    //만약 현재메일의 타이틀을 클릭시는 다시 원상태로 되돌아 가게 만든다.
    $scope.click_now_mail_title = function () {
        $scope.up_mail_box = $scope.emails;
        $scope.now_mail = {};
        $scope.down_mail_box = [];
        $scope.now_mail_view = false;
    };


    //별을 클릭시에만 별메뉴가 보이게 한다
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