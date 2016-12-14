var app = angular.module('mp3',['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'partials/landing.html',
        controller: 'LandingController'
      })

      .when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutController'
      })

      .when('/whosin', {
        templateUrl: 'partials/whosin.html',
        controller: 'WhosinController'
      })

      .when('/foodful', {
        templateUrl: 'partials/foodful.html',
        controller: 'FoodfulController'
      })

      .when('/illinisporcle', {
        templateUrl: 'partials/illinisporcle.html',
        controller: 'SporcleController'
      })

      .when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactController'
      })
})
