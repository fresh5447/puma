var pumaApp = angular.module('pumaApp',['ngRoute']);

pumaApp.controller('NavBarCtrl', function($scope) {
    $scope.navToggle = function(){
    	$scope.isCollapsed = ! $scope.isCollapsed;
    }
});

pumaApp.config(function($routeProvider){
	$routeProvider

	.when('/', {
		controller: 'mainController',
		templateUrl: 'mainTemplate.html',
		})
	.when('/products', {
		controller: 'productsController',
		templateUrl: 'productsTemplate.html'
	})
	.when('/settings', {
		controller: 'settingsController',
		templateUrl: 'settingsTemplate.html'
	})
	.when('/products', {
		controller: 'productsController',
		templateUrl: 'productsTemplate.html'
	})

});

pumaApp.controller('mainController', function($scope){
	$scope.message = "hello from the main controller";
});

pumaApp.controller('productsController', function($scope){
	$scope.message = "hello from the products controller";
});

pumaApp.controller('settingsController', function($scope){
	$scope.message = "hello from the settingss controller";
});

pumaApp.controller('productsController', function($scope){
	$scope.productToggle = function(){
    	$scope.productCollapsed = ! $scope.productCollapsed;
    }
});