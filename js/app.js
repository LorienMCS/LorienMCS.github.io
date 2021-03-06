var app = angular.module('portfolioApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
    })
    .when('/projects', {
      templateUrl: 'partials/projects.html',
    })
    .when('/experience', {
      templateUrl: 'partials/experience.html',
    })
    .when('/contact', {
      templateUrl: 'partials/contact.html',
    }).otherwise({
      redirectTo: '/'
    });
}]);