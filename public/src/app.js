angular.module('ContactsApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/angular', {
                controller: 'ListController',
                templateUrl: 'views/list.html'
            });
        $locationProvider.html5Mode(true);
    });
