angular.module("MIP", ["ngRoute"])
	.config(function($routeProvider) {
		$routeProvider.when("/register", {
			templateUrl: "views/regform.html"
		});
		$routeProvider.otherwise({
			templateUrl: "views/loginform.html"
		});
	});