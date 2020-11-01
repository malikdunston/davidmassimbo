(function(){

	let contact = angular.module(
	"contact", [
	]);

	contact.config(function($stateProvider){
	$stateProvider.state(
	'contact', {
		url: '/contact',
		templateUrl: '/routes/contact/contact.html',
		controller: "contactCtrl",
		controllerAs: "contact",
		resolve: {
			info: function($http){
				return $http({
					method: "GET",
					url: window.$cms + "contact?per_page=100"
				}).then(function(res){
					return res.data
				});
			}
		}
	})});

	contact.controller("contactCtrl", function($scope, info, $http) {
	var contact = this;
	contact.app = $scope.$parent.david;

		contact.info = info;

		// contact.app.user = {
		// 	name: {
		// 		first: "Malik",
		// 		last: "Dunston"
		// 	},
		// 	contact: {
		// 		phone: 3159256876,
		// 		email: "malik.dunston.1024@gmail.com"
		// 	},
		// 	needs: "I need an architect for xyz project in New York."
			
		// }	


	// from my site
		contact.submit = function(){
			console.log(contact.app.user);
		}

		contact.error = "";
		contact.register = function(user){
			$http.post("../../assets/php/contact.php", {
				'firstname': user.name.first,
				'lastname': user.name.last,
				'phone': user.contact.phone,
				'email': user.contact.email,
				'needs': user.needs,
			}).then( function(data, status, headers, config){
				alert("Thank you, " + user.name.first);
				console.log(user);
				window.location.href = "http://davidmassimbo.com"
			}, function(data, status, headers, config){
				switch(status){
					case "404":
						contact.error = "404";
						alert(contact.error);
						console.log(contact.error);
						// break;
					case "405":
						contact.error = "405";
						alert(contact.error);
						console.log(contact.error);
						// break;
					case "403":
						contact.error = "403";
						alert(contact.error);
						console.log(contact.error);
						// break;
					case "500":
						contact.error = "500";
						alert(contact.error);
						console.log(contact.error);
						// break;
				}
			});

				// 			alert("Thank you, " + user.name.first);
				// console.log(user);

		};

	});


})();