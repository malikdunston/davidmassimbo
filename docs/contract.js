const password = "a72b";


let loadAngular = function(){
	let contract = angular.module("contract", []);
	contract.controller("contractCtrl", function($scope){
		$scope.title = "Website Agreement";
		$scope.author = {
			name: "Malik Dunston",
			address: "3237 Sable Run Rd, Atlanta, GA 30349"
		}
		$scope.client = {
			name: "David Massimbo",
			address: "127 Lexington Ave, Syracuse, New York 13210"
		}
		$scope.services = [
			"Web Design",
			"Web Development"
		]
		$scope.project = {
			title: "davidmassimbo.com",
			cost: 800,
			payment: "$300 before commencement, $500 at close."
		}
		$scope.interestRate = "10";
		$scope.date = new Date;
	});
	document.title = "David Massimbo";
	setTimeout(function(){
		document.querySelector(".content").classList.remove("hidden");
		// document.querySelector(".box").classList.remove("hidden");
	}, 500);
}

let ask = prompt("Password: ");
if(ask !== password){
	alert("Password Incorrect!");
	window.location.href = "http://www.malikdunston.com/";
}else{
	loadAngular();
}



