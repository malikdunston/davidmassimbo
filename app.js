(function(){

	let david = angular.module("david", [
		"navigation"
	]);

	david.controller("appCtrl", function($scope){
	let david = this;

		david.title = "David Massimbo";
		console.log(david.title);

		david.menu = [
			{title: "work", link: "work"},
			{title: "about", link: "about"},
		]

		$data.get("http://cms.davidmassimbo.com/wp-json/wp/v2/projects", function(response){
			console.log(JSON.parse(response));
		})

	});

})();