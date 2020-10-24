const password = "cuse44";



// (function(){

let loadAngular = function(){

	let david = angular.module("david", [
		"ui.router",
		// "$http",
	// routes
		"home",
		"project",
		"contact",
	// components
		"navigation",
		"work"
	]);

	david.config(function($locationProvider, $urlRouterProvider){
	        $locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise("/");
	});

	david.controller("appCtrl", function($scope, $http, $q){
	let app = this;



	// get all tags
		$http({
			method: "GET",
			url: window.$cms + "projects?per_page=100"
		}).then(function(res){
		// is this project a parent?
			let parents = res.data.filter(proj => proj.acf.parent == null || undefined || 0);
			// let children = res.data.filter(proj => typeof proj.acf.parent == "number");

			// console.log("parents --------------------------------   " + parents.length);
			// parents.forEach(parent => console.log(parent.title.rendered));
			// console.log("children --------------------------------   " + children.length);
			// children.forEach(child => console.log(child.title.rendered, "parent: " + child.acf.parent));

		// attach children to parents.
			parents.forEach(parent => {
				parent.children = res.data.filter(child => child.acf.parent == parent.id);
			});
			app.projects = parents;
		});


	// // get all tags
	// 	$http({
	// 		method: "GET",
	// 		url: window.$cms + "tags"
	// 	}).then(function(res){
	// 		app.tags = [];
	// 	// group projects by tag.
	// 		res.data.forEach(function(tag){
	// 		// for every tag, search for projects with that tag's id.
	// 			$http({
	// 				method: "GET",
	// 				url: window.$cms + "projects?tags=" + tag.id
	// 			}).then(function(r){
	// 			// get an array of objects
	// 			// attach to the tag parent.
	// 				tag.projects = r.data;
	// 				tag.name
	// 			// push whole tag parent to app.tags.
	// 				app.tags.push(tag);
	// 			});
	// 		})
	// 		console.log("PROJECTS: ", app.tags);
	// 	});



	// page stuff
		app.title = "David Massimbo";
		app.menu = [
			{title: "about", link: "about"},
			{title: "work", link: "work"},
			{title: "contact", link: "contact"},
		]

	// users and form
		app.user = {
			name: {
				first: "Malik",
				last: "Dunston"
			}
		}


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