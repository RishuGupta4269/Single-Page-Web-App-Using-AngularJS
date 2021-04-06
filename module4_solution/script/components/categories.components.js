(function(){
	'use strict';

	angular.module('MenuApp')
		.component('categories',{
			templateUrl:'script/templates/categories.components.html',
			bindings:{
				categories:'<'
			}
		});
})();