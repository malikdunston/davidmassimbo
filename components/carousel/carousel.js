(function(){

	let carousel = angular.module(
	"carousel", []);

	carousel.component("carousel", {
		controller: "carouselCtrl",
		controllerAs: "carousel",
		templateUrl: "components/carousel/carousel.html",
		bindings: {
			feed: "<"
		}
	});

	carousel.controller("carouselCtrl", function($scope) {
	var carousel = this;
	carousel.app = $scope.$parent.david;
	
		carousel.$onInit = function(){
			console.log(carousel);
		}

		let wrapper = document.querySelector('.wrapper');
		let feed = document.querySelector('.feed');

		let order;

		carousel.move = {
			up(){
				order = -1;
				wrapper.style.justifyContent = 'flex-start';
				feed.style.transform = 'translate(-100%)';
			},
			down(){
				if (order === -1) {
					order = 1;
					feed.appendChild(feed.firstElementChild);
				}
				wrapper.style.justifyContent = 'flex-end';
				feed.style.transform = 'translate(100%)';
			}
		}

		feed.addEventListener('transitionend', function () {
			if (order === 1) {
				feed.prepend(feed.lastElementChild);
			} else {
				feed.appendChild(feed.firstElementChild);
			}
			feed.style.transition = 'none';
			feed.style.transform = 'translate(0)';
			setTimeout(() => {
				feed.style.transition = 'all 0.5s';
			})
		}, false);

		carousel.rotation = setInterval(carousel.move.up, 5000);

		carousel.pause = function(){
			clearInterval(carousel.rotation);
		}
	});



})();