var app = angular.module('charbase', [
    'charbase.home-ctrl'
]);

app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider){

    $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('charbase', {
        abstract: true
    });

    $stateProvider.state('charbase.home', {
        url: '/home',
        templateUrl: 'home/home.tpl.html',
        controller: 'HomeCtrl as ctrl'
    });
}]);