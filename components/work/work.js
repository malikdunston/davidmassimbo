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
			console.log(work);
			let x = work.feed;
			// work.parents = x.filter(proj => proj.acf.parent == null)
			// work.children = work.feed.filter(proj => proj.acf.parent !== null)
			// console.log(work.parents, work.children, work.feed);
			// console.log(work.feed);
		}

	});

})();