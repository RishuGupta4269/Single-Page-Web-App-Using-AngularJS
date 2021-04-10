(function(){
	'use strict';

	angular.module('public')
	.controller('InfoController',InfoController);

	InfoController.$inject=['MenuService','ApiPath'];

	function InfoController(MenuService,ApiPath){
		var $ctrl=this;
		$ctrl.path=ApiPath;
		$ctrl.signedUp=false;
		
		$ctrl.user=MenuService.getUser();
		console.log(this.user);
		if(angular.equals($ctrl.user,{})){
			$ctrl.signedUp=false;
		}
		else{
			$ctrl.signedUp=true;
		}
	}
})();