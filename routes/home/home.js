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
			data: function($http){
				let x = $http({
					method: "GET",
					url: window.$cms + "projects?per_page=100"
				}).then(function(res){
					return res.data
				});
				return x
			}
		}
	})});

	home.controller("homeCtrl", function($scope, $http, data) {
	var home = this;
	home.app = $scope.$parent.david;


		console.log(data);

			data.forEach(project => {
				home.app.parseContent(project);
				home.app.getCoverImg(project);
			});
			let stuff = home.app.structureData(data);
			home.projects = stuff.filter(proj => proj.acf.homepage == true);

			console.log(home);


		// let x = home.app.projects.filter(proj => proj.acf.homepage == true);
		// home.slideshow = x;

		// console.log(home.app.projects);

		// let x = home.app;
		// console.log(x);
		// home.carousel = x.filter(proj => proj.acf.homepage == true);
		// home.projects = home.app.projects.filter(proj => proj.acf.homepage !== true);

	});

})();

