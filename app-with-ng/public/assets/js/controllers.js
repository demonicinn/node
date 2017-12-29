
myApp.controller('homeController', function($scope) {
	$scope.message = 'Everyone come and see how good I look home connn!';
});

myApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});











//contact page
myApp.controller('contactController', function($scope, $http) {
	get();
	function get() {	
		$http.get('api/contact/get')
		.then(function (results) {
			console.log(results);			
		});
	}
	
});

