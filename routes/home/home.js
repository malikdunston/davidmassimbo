(function(){

	let home = angular.module("home", []);

	home.config(function($stateProvider){
	$stateProvider.state(
	'home', {
		url: '/',
		templateUrl: '/routes/home/home.html',
		controller: "homeCtrl",
		controllerAs: "home",
	})});

	home.controller("homeCtrl", function($scope) {
	var home = this;
	home.app = $scope.$parent.david;
	


	});

})();

