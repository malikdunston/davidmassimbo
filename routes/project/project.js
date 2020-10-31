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

	project.controller("projectCtrl", function($scope, allProj, thisProj) {
	var project = this;
	project.app = $scope.$parent.david;



		project.thisProj = thisProj[0];

		project.thisProj.children = allProj.filter(proj => proj.acf.parent == project.thisProj.id);

		project.thisProj.children.forEach(proj => {
			project.app.parseContent(proj);
		})

		project.app.parseContent(thisProj[0]);

		console.log(project);

	});

})();