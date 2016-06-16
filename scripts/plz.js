var myApp=angular.module("MIP");
	
	myApp.controller("myController",function($scope, $http){
		var data = {};
		
		$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		
		$scope.data = data;
		
		//registers new user
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
		//should indicate if all data is valid and user was successfully created
		//currently only shows a box that turns green if it works
		$scope.checkvalid = function(){
			return $scope.data.valid ? "alert alert-success" : "alert alert-danger";
		}
		
		//deletes last user inside the database, will further expand on this later to make do several things
		$scope.deleteuser = function(){
			$http.post("scripts/deleteuser.php")
			.then(function(res){
				console.log('got it!!!');
				console.log(res);
			},
			function(res){
				console.log('php plz');
			});
		}
		
		$scope.login = function(data){
			$http.get("scripts/loginuser.php", data)
			.then(function(res){
				console.log(res);
			},
			function(res){
				console.log(res);
			});
		}
	});