var app=angular.module('single-page-app',['ngRoute']);
app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: './views/home.html',
        		controller: 'cfgController'
          })
          .when('/about',{
                templateUrl: './views/about.html',
                controller: 'cfgController'
          }).
           otherwise({
        	    redirectTo: '/'
      		});
});

app.controller('cfgController',function($scope){

      $scope.message="Hello world";

});
