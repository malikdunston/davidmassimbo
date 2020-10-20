(function(){

	let home = angular.module("home", []);

	home.config(function($stateProvider){
	$stateProvider.state(
	'home', {
		url: '/',
		templateUrl: '/routes/home/home.html',
		controller: "homeCtrl",
		controllerAs: "home",
		resolve: {
			allProj: function($http){
				return $http({
					method: "GET",
					url: window.$cms + "projects"
				}).then(function(res){
					return res.data
				});
			}
		}
	})});

	home.controller("homeCtrl", function($scope, allProj) {
	var home = this;
	home.app = $scope.$parent.david;
	
		// console.log("home", allProj, home.app.tags);
		// console.log("tags " + window.tags)


	});

})();

