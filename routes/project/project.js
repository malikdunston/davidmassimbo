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
	})});

	project.controller("projectCtrl", function($scope, $stateParams, $sce) {
	var project = this;
	project.app = $scope.$parent.david;

		if($stateParams.projName == undefined){
			window.location = "google.com"
		}else {

		}
	
		project.currentTag = project.app.tags.filter(project => project.slug == $stateParams.projName)[0];
		
		project.currentTag.projects.forEach(proj => {
			proj.content.rendered = $sce.trustAsHtml(proj.content.rendered);
			console.log(proj.content.rendered);
		})

		console.log(project.currentTag);

	});

})();