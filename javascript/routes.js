app.config(function($routeProvider, $locationProvider){

  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html'
  })
  .when('/about', {
    templateUrl: 'views/about.html'
  })
  .when('/stories', {
    templateUrl: 'views/stories.html'
  })
    .otherwise({
      redirectTo: '/'
    })
  $locationProvider.html5Mode(true);
});
