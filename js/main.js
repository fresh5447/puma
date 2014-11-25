var pumaApp = angular.module('myApp',['ngRoute']);

pumaApp.config(function($routeProvider){
	$routeProvider

	.when('/', {
		controller: 'mainController',
		templateUrl: 'mainTemplate.html',
		)}
	.when('products'{
		controller: 'productController',
		templateUrl: 'productsTemplate.html'
	});
});

pumaApp.controller('mainController', ['$scope', function ($scope) {
	$scope.message = "hello from main"
}])

pumaApp.controller('productsController', ['$scope', function ($scope) {
	$scope.message = "hello from products"
}])