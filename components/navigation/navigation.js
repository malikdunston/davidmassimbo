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
	
		console.log(navigation);

	// open/close Navigation
		navigation.app.navOpen = false;
		navigation.openNavigation = function(){
			if(nav.app.navOpen == false){
				nav.app.navOpen = true
			} else {
				nav.app.navOpen = false
			}
		}

	});

})();