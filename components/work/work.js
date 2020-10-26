(function(){

	let work = angular.module(
	"work", []);

	work.component("work", {
		controller: "workCtrl",
		controllerAs: "work",
		templateUrl: "components/work/work.html",
		bindings: {
			feed: "<"
		}
	});

	work.controller("workCtrl", function($scope) {
	var work = this;
	work.app = $scope.$parent.david;
	
		work.$onInit = function(){
		}

	});

})();