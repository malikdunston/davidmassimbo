const password = "cuse44";



// (function(){

let loadAngular = function(){

	let david = angular.module("david", [
		"ui.router",
		// "$http",
	// routes
		"home",
		"project",
	// components
		"navigation",
		"work"
	]);

	david.config(function($locationProvider, $urlRouterProvider){
	        $locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise("/");
	});

	david.controller("appCtrl", function($scope, $http){
	let app = this;



	// get all tags
		$http({
			method: "GET",
			url: window.$cms + "tags"
		}).then(function(res){
			app.tags = [];
		// group projects by tag.
			res.data.forEach(function(tag){
			// for every tag, search for projects with that tag's id.
				$http({
					method: "GET",
					url: window.$cms + "projects?tags=" + tag.id
				}).then(function(r){
					tag.projects = r.data;
					app.tags.push(tag);
				});
			})
			console.log("PROJECTS: ", app.tags);
		});



	// page stuff
		app.title = "David Massimbo";
		app.menu = [
			{title: "about", link: "about"},
			{title: "work", link: "work"}
		]


	});

}

// })();


// let ask = prompt("Password: ");
// if(ask !== password){
// 	alert("Password Incorrect!");
// 	window.location.href = "http://www.malikdunston.com/";
// }else{
	loadAngular();
// }