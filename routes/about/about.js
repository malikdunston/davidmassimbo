(function(){

	let about = angular.module(
	"about", [
	]);

	about.config(function($stateProvider){
	$stateProvider.state(
	'about', {
		url: '/about',
		templateUrl: '/routes/about/about.html',
		controller: "aboutCtrl",
		controllerAs: "about"
	})});

	about.controller("aboutCtrl", function($scope) {
	var about = this;
	about.app = $scope.$parent.david;
	

	});

})();