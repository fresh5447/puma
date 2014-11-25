var pumaApp = angular.module('pumaApp',['ngRoute']);

pumaApp.config(function($routeProvider){
	$routeProvider

	.when('/', {
		controller: 'mainController',
		templateUrl: 'templates/mainTemplate.html',
		})
	.when('/login', {
		controller: 'loginController',
		templateUrl: 'templates/login.html',
		})
	.when('/register', {
		controller: 'registrationController',
		templateUrl: 'templates/registration.html',
		})
	.when('/products', {
		controller: 'productsController',
		templateUrl: 'templates/productsTemplate.html'
	});
});

pumaApp.controller('mainController', function($scope){
	$scope.message = "hello from the main controller";

});

pumaApp.controller('productsController', function($scope){
	$scope.message = "hello from the products controller";

});
pumaApp.controller('loginController', function($scope){
	$scope.message = "hello from the login controller";

});
pumaApp.controller('registrationController', function($scope){
	$scope.message = "hello from the registration controller";

});