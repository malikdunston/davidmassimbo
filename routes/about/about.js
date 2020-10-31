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
		controllerAs: "about",
		resolve: {
			aboutData: function($http){
				$http({
					method: "GET",
					url: window.$cms + "about?per_page=100"
				}).then(function(res){
					// res.data.forEach(project => {
						// app.parseContent(project);
						// app.getCoverImg(project);
					// });
					// let newData = app.structureData(res.data);
					// newData.forEach(parentProj => {
					// 	if(parentProj.cover == undefined || parentProj.cover == null){
					// 		parentProj.cover = parentProj.children[0].content.data[0].img;
					// 	}
					// });
					return res.data
				});
			}
		}
	})});

	about.controller("aboutCtrl", function($scope, aboutData) {
	var about = this;
	about.app = $scope.$parent.david;
	
		about.data = aboutData;
		console.log(about);

	});

})();