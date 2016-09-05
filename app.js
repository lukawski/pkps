var pkpsApp = angular.module('pkpsApp', ['ngRoute']);
         pkpsApp.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            
            when('/about', {
              templateUrl: 'about.html'
            }).

            when('/statut', {
               templateUrl: 'statut.html'

            }).

            when('/zarzad', {
               templateUrl: 'zarzad.html'
            }).

            when('/info', {
              templateUrl: 'info.html'
            }).

            when('/programy', {
              templateUrl: 'programy.html'
            }).

            when('/akcje', {
              templateUrl: 'akcje.html'
            }).

            when('/galeria', {
              templateUrl: 'galeria.html'
            });

            otherwise({
               redirectTo: '/about'
            });
         }]);