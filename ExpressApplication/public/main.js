var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/posts.html',
            controller: 'postsController'
        })
        .when('/posts', {
            templateUrl: 'app/views/posts.html',
            controller: 'postsController'
        })
        .when('/stats', {
            templateUrl: 'app/views/stats.html',
            controller: 'statsController'
        })
        .when('/login', {
            templateUrl: 'app/views/login.html',
            controller: 'loginController'
        })
        .when('/register', {
            templateUrl: 'app/views/register.html',
            controller: 'registerController'
        })
        .otherwise({
            templateUrl: 'app/views/posts.html',
            controller: 'postsController'
        });
});