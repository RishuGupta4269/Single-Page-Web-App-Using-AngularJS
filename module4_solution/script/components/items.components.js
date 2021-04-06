(function(){
	'use strict';

	angular.module('MenuApp')
		.component('items',{
			templateUrl:'script/templates/items.components.html',
			bindings:{
				items:'<'
			}
			
		});
})();