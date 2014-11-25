var pumaApp = angular.module('pumaApp',['ngRoute']);

pumaApp.config(function($routeProvider){
	$routeProvider

	.when('/', {
		controller: 'mainController',
		templateUrl: 'mainTemplate.html',
		})
	.when('/products', {
		controller: 'productsController',
		templateUrl: 'productsTemplate.html'
	});
});

pumaApp.controller('mainController', function($scope){
	$scope.message = "hello from the main controller";

});

pumaApp.controller('productsController', function($scope){
	$scope.message = "hello from the products controller";

});