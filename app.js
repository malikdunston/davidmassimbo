// const { networkInterfaces } = require("os");

(function(){

	let david = angular.module("david", [
		"ui.router",
	// routes
		"home",
		"project",
		"contact",
		"about",
	// components
		"navigation",
		"work",
		"slider"
	]);

	david.config(function($locationProvider, $urlRouterProvider){
	        $locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise("/");
	});

	david.controller("appCtrl", function($scope, $http, $q, $transitions){
	let app = this;

		$http({
			method: "GET",
			url: window.$cms + "projects?per_page=100"
		}).then(function(res){
			res.data.forEach(project => {
				app.parseContent(project);
				app.getCoverImg(project);
			});
			app.projects = app.structureData(res.data);
			// app.projects.homepage = app.projects.filter(proj => proj.acf.homepage == true);
		});

		app.structureData = function(data){
			let parents = data.filter(proj => proj.parent === 0);
			parents.forEach(parent => {
				parent.rela = "parent";
				parent.children = data.filter(child => child.parent == parent.id);
				if(parent.cover == undefined || parent.cover == null){
					parent.cover = parent.children[0].content.data[0].img;
				}
			});
			return parents
		}

		app.parseContent = function(project){
			project.content.data = [];
			let projNode = document.createElement("div");
			projNode.innerHTML = project.content.rendered;
			projNode.childNodes.forEach(node => {
				if(node.nodeType !== 3 || node.nodeType != Node.TEXT_NODE){
					let obj = {};
					if(node.tagName == "P"){
						obj.text = node.innerHTML;
						obj.tag = "p";
					}else{ // FIGURE = one image and maybe one caption.
						node.childNodes.forEach(figNode => {
							if(figNode.tagName == "IMG"){
								obj.img = figNode.src;
								obj.tag = "img";
							}else if(figNode.tagName == "FIGCAPTION"){
								obj.caption = figNode.innerHTML;
								obj.tag = "figcaption";
							}
						});
					}
					project.content.data.push(obj);
				}
			});
			return project
		}

		app.getCoverImg = function(project, rela){
			let images = project.content.data.filter(elem => elem.tag == "img" || elem.tag == "figcaption");
			if (images.length > 0){
				project.cover = images[0].img;
			}
			return project
		} 

	// on route change, do this...
		$transitions.onSuccess({}, function ($transition) {
			window.scrollTo(0, 0);
			app.route = {
				from: $transition.$from().name,
				to: $transition.$to().name,
				params: $transition.params().name
			};
			app.routeClass = app.route.to;
			if(app.navOpen == true){
				app.navOpen = false;
			}
		});

	});

})()