var myApp=angular.module("MIP",[]);//needs to be the php file
	
	myApp.controller("myController",function($scope, $http){
		var data = {};
		
		$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		
		$scope.data = data;
		
		$scope.register = function(reg_data){
			
			$http.post("register.php", reg_data)
			.then(function(res){
				//success callback
				console.log(reg_data);
				console.log(res);
				console.log('YUP');
				
			},
			function(res){
				//failed callback
				console.log('NOPE');
			});
		}
	});