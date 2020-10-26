const { networkInterfaces } = require("os");

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

	david.controller("appCtrl", function($scope, $http, $q){
		let app = this;

	// get, organize projects!
		$http({
			method: "GET",
			url: window.$cms + "projects?per_page=100"
		}).then(function(res){
		// get the content from each project into series of images.
			let data = app.getContent(res);
		// Then sort the projects
		// is this project a parent?
			let parents = data.filter(proj => typeof proj.acf.parent !== "number" || proj.acf.parent === 0);
		// attach children to parents.
			parents.forEach(parent => {
				parent.children = data.filter(child => child.acf.parent == parent.id);
			});
			app.projects = parents;
		});

	// need to parse the images with their data from each proj.
	// this is done for all projs, parent or child.
		app.getContent = function(res){
			this.getCoverImg = function(proj){
				let x = proj.content.data.filter(elem => elem.tag == "img")
				proj.coverImg = proj.content.data[0]
			}
			let data = res.data || res; // for proj route
			data.forEach(proj => {
			// create an array of either paragraphs or figure tags.
				proj.content.data = [];
			// create html object so you can inject response inside
			// div
				let html = document.createElement("div");
				html.innerHTML = proj.content.rendered;
			// get nodes. either figure or p tags.
			// and attach to proj.content.data!!!
			// so we can get raw html.
				html.childNodes.forEach(node => {
					if(node.nodeType !== 3 || node.nodeType != Node.TEXT_NODE){
						let obj = {};
						if(node.tagName == "P"){
							obj.text = node.innerHTML;
							obj.tag = "p";
							// proj.content.data.push(node.innerHTML);
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
						proj.content.data.push(obj);
					}
				});
			// take the first image in proj.content.data and
			// make it the cover image for now.
				this.getCoverImg(proj);
			})
			return data
		}

	});

})()