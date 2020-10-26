(function(){

	let navigation = angular.module(
	"navigation", []);

	navigation.component("navigation", {
		controller: "navCtrl",
		controllerAs: "navigation",
		templateUrl: "components/navigation/navigation.html"
	});

	navigation.controller("navCtrl", function($scope) {
	var navigation = this;
	navigation.app = $scope.$parent.david;
	
	// page stuff
		navigation.app.menu = [
			{title: "about", link: "about"},
			{title: "work", link: "work"},
			{title: "contact", link: "contact"},
		]

	});

})();