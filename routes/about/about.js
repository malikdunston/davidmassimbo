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
				return $http({
					method: "GET",
					url: window.$cms + "about?per_page=100"
				}).then(function(res){
					return res.data
				});
			}
		}
	})});

	about.controller("aboutCtrl", function($scope, aboutData) {
	var about = this;
	about.app = $scope.$parent.david;
	
		let view = [];

		aboutData.forEach(post => {
			let obj = {};
			obj.id = post.id;
			obj.html = about.app.parseContent(post).content.data;
			obj.title = post.title.rendered;
			obj.slug = post.slug;
			view.push(obj);
		})

		about.data = view;

		console.log(about);

	});

})();