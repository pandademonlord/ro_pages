var myApp=angular.module("MIP");//needs to be the php file
	
	myApp.controller("myController",function($scope, $http){
		var data = {};
		
		$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		
		$scope.data = data;
		
		$scope.register = function(reg_data){
			
			$http.post("register.php", reg_data)
			.then(function(res){
				//success callback
				//should re-direct to main page
				console.log(reg_data);
				console.log(res);
				console.log('YUP');
				$scope.data.valid = true;
				
			},
			function(res){
				//failed callback
				$scope.data.valid = false;
			});
		}
		$scope.checkvalid = function(){
			return $scope.data.valid ? "alert alert-success" : "alert alert-danger";
		}
		
		$scope.deleteuser = function(){
			$http.post("scripts/deleteuser.php")
			.then(function(res){
				console.log('got it!!!');
			},
			function(res){
				console.log('php plz');
			});
		}
	});