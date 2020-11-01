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
		// let x = home.app;
		// console.log(x);
		// home.carousel = x.filter(proj => proj.acf.homepage == true);
		// home.projects = home.app.projects.filter(proj => proj.acf.homepage !== true);

	});

})();

