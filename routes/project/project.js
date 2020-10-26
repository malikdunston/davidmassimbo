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
			// // get all tags
				projs = $http({
					method: "GET",
					url: window.$cms + "projects?slug=" + $stateParams.projName
				}).then(function(res){
				// is this project a parent?
				// 	let parents = res.data.filter(proj => proj.acf.parent == null || undefined || 0);
				// // attach children to parents.
				// 	parents.forEach(parent => {
				// 		parent.children = res.data.filter(child => child.acf.parent == parent.id);
				// 	});
					return res.data
				});
				return projs
			},
			allProj: function($http, $stateParams){
			// // get all tags
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

	project.controller("projectCtrl", function($scope, $stateParams, allProj, thisProj, $sce) {
	var project = this;
	project.app = $scope.$parent.david;

		project.thisProj = thisProj[0];
		project.thisProj.content.rendered = $sce.trustAsHtml(project.thisProj.content.rendered);
		project.thisProj.children = allProj.filter(proj => proj.acf.parent == project.thisProj.id);

		project.thisProj.children.forEach(proj => {
			proj.content.rendered = $sce.trustAsHtml(proj.content.rendered);
		})

		project.app.getContent(thisProj);
		project.app.getContent(project.thisProj.children);

		console.log(project);

	});

})();