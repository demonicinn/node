// create the module and name it myApp
// also include ngRoute for all our routing needs
var myApp = angular.module('myApp', ['ngRoute']);

// configure our routes
myApp.config(function($routeProvider) {
	$routeProvider
	
	// route for the home page
	.when('/', {
		templateUrl : 'pages/front/home/index.htm',
		controller  : 'mainController'
	})
	
	// route for the about page
	.when('/about', {
		templateUrl : 'pages/front/about/index.htm',
		controller  : 'mainController'
	})
	
	// route for the contact page
	.when('/contact', {
		templateUrl : 'pages/front/contact/index.htm',
		controller  : 'mainController'
	})
	
	.otherwise({
		redirectTo: '/home'
	});
});

// create the controller and inject Angular's $scope
myApp.controller('mainController', function($scope) {
	//$scope.message = 'Everyone come and see how good I look home connn!';
});
