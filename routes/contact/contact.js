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
		controllerAs: "contact"
	})});

	contact.controller("contactCtrl", function($scope) {
	var contact = this;
	contact.app = $scope.$parent.david;
	

	});

})();