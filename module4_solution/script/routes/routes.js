(function(){
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];

	function RoutesConfig($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home',{
				url:'/',
				templateUrl:'script/templates/home.html'
			})
			.state('categories',{
				url:'/categories',
				templateUrl:'script/templates/categories.template.html',
				controller:'categoriesController as categoriesCtrl',
				resolve:{
					categories:['MenuDataService',function(MenuDataService){
						return MenuDataService.getAllCategories();
					}]
				}
			})
			.state('items',{
				url:'/categories/{categoryShortName}',
				templateUrl:'script/templates/items.template.html',
				controller:'itemsController as itemsCtrl',
				params:{
					categoryShortName:null,
					categoryName:null
				},
				resolve:{
					items:['$stateParams','MenuDataService',function($stateParams,MenuDataService){
					return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
				}]

				}
			});
	}
})();