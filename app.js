// const { networkInterfaces } = require("os");

(function(){

	let david = angular.module("david", [
		"ui.router",
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
			let newData = app.structureData(res.data);
			newData.forEach(parentProj => {
				if(parentProj.cover == undefined || parentProj.cover == null){
					parentProj.cover = parentProj.children[0].content.data[0].img;
				}
			});
			app.projects = newData;
		});

		app.structureData = function(data){
		// Then sort the projects
		// is this project a parent?
			let parents = data.filter(proj => typeof proj.acf.parent !== "number" || proj.acf.parent === 0);
		// attach children to parents.
			parents.forEach(parent => {
				parent.rela = "parent";
				parent.children = data.filter(child => child.acf.parent == parent.id);
			});
			return parents
		}

	// need to parse the images with their data from each proj.
	// this is done for all project, parent or child.
		app.parseContent = function(project){
		// get nodes. either figure or p tags.
		// and attach to project.content.data!!!
		// so we can get raw html.
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
			
		// // is it a parent?
		// 	let parents = data.filter(proj => typeof proj.acf.parent !== "number" || proj.acf.parent === 0);
		// 	parents.map(function(obj){
		// 		obj.rela = "parent"
		// 	});


			return project
		}

		app.getCoverImg = function(project, rela){
			// var defaultCover = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*";
			let images = project.content.data.filter(elem => elem.tag == "img" || elem.tag == "figcaption");
			if (images.length > 0){
				project.cover = images[0].img;
			}else
		// is the project a parent?






			return project

			// console.log(project.title.rendered, project.cover, project);
		}

	// on route change, do this...
		$transitions.onSuccess({}, function ($transition) {
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