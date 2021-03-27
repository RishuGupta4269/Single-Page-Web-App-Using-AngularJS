(function(){
	'use strict';

	angular.module('NarrowItDownApp',[])
	.controller('NarrowItDownController',NarrowItDownController)
	.service('MenuSearchService',MenuSearchService)
	.constant('ApiBasePath',"https://davids-restaurant.herokuapp.com/menu_items.json")
	.directive('foundItems',FoundItems);


	

	function FoundItems(){
		var ddo={
			templateUrl:"found_items_temp.html",
			restrict:'E',
			scope:{
				foundItems:'<',
				onEmpty:'<',
				onRemove:'&'
			},
			controller:NarrowItDownController,
			controllerAs:'nidCtrl',
			bindToController:true,
		};

		return ddo;
	}
	NarrowItDownController.$inject=['MenuSearchService'];

	function NarrowItDownController(MenuSearchService){
		var nidCtrl=this;
		nidCtrl.searchForm='';

		nidCtrl.searchMenuItem=function(searchTerm){
			var promise=MenuSearchService.getMatchedMenuItems(searchTerm);

			promise.then(function(response){
				if(response.length>0 && response){
					nidCtrl.message='';
					nidCtrl.found=response;
				}
				else{
					nidCtrl.message='Nothing Found!';
					nidCtrl.found=[];
				}
			});
		};

		nidCtrl.removeItem=function(ind){
			nidCtrl.found.splice(ind,1);
		}
	}

	MenuSearchService.$inject=['$http','ApiBasePath'];

	function MenuSearchService($http,ApiBasePath){
		var service = this;

		service.getMatchedMenuItems=function(searchTerm){
			return $http({
				method:"GET",
				url:ApiBasePath
			})
			.then(function(result){
				var foundItems=[];

				if(searchTerm.length > 0){
					for (var i=0;i<result.data['menu_items'].length;i++){
							if(result.data['menu_items'][i]['description'].toLowerCase().indexOf(searchTerm)!==-1){
								foundItems.push(result.data['menu_items'][i]);
							}
					}
				}
				return foundItems;
			});

		};

	}

})();