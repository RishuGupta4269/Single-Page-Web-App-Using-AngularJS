(function(){
	'use strict';

	angular.module('public')
		.controller('SignupController',SignupController);

	SignupController.$inject=['MenuService'];

	function SignupController(MenuService){
		var $ctrl=this;

		$ctrl.user={};
		$ctrl.favDish={};

		$ctrl.signUp= function(form){
			$ctrl.showError=false;
			$ctrl.showMessage=false;

			if(form.$invalid){
				console.error("Form is invalid");
			}

		MenuService.getFavouriteDish($ctrl.user.favDish).then(function(response){
			$ctrl.user.favDishDetails=response.data;
			// console.log($ctrl.user.favDishDetails);
			MenuService.saveUser($ctrl.user);
			$ctrl.showMessage=true;
		},function(error){
			console.error("error in favDish");
			$ctrl.showError=true;
		});

		

		}


	}
})();