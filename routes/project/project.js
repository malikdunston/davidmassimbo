(function(){

	let project = angular.module(
	"project", [
	]);

	project.config(function($stateProvider){
	$stateProvider.state(
	'project', {
		url: '/work/:projName',
		templateUrl: '/routes/project/project.html',
		controller: "projectCtrl",
		controllerAs: "project",
		resolve: {
			thisProj: function($http, $stateParams){
				projs = $http({
					method: "GET",
					url: window.$cms + "projects?slug=" + $stateParams.projName
				}).then(function(res){
					return res.data
				});
				return projs
			},
			allProj: function($http, $stateParams){
				projs = $http({
					method: "GET",
					url: window.$cms + "projects" 
				}).then(function(res){
					return res.data
				});
				return projs
			}
		}	
	})});

	project.controller("projectCtrl", function($stateParams, $scope, allProj, thisProj) {
	var project = this;
	project.app = $scope.$parent.david;

		let children = allProj.filter(proj => proj.acf.parent == thisProj[0].id);

		let theseProj = [...children, ...thisProj];

		theseProj.forEach(proj => {
			project.app.parseContent(proj);
			project.app.getCoverImg(proj);
		});

		project.thisProj = project.app.structureData(theseProj).filter(proj => proj.slug == $stateParams.projName)[0];

	});

})();