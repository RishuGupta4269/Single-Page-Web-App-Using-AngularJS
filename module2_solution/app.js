(function(){
	'use strict';

	angular.module('ListCheck',[])
	.controller('ToBuyController',ToBuyFunc)
	.controller('AlreadyBoughtController',BoughtFunc)
	.service('ShoppingListCheckOffService',CheckOffFunc);

	ToBuyController.$inject=['ShoppingListCheckOffService'];
	function ToBuyFunc(ShoppingListCheckOffService){

		var tbCtrl=this;

		tbCtrl.items=ShoppingListCheckOffService.getToBuyItems();

		tbCtrl.buy=(index)=>ShoppingListCheckOffService.buyItem(index);

	}

	AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
	function BoughtFunc(ShoppingListCheckOffService){
		var abCtrl=this;

		abCtrl.items=ShoppingListCheckOffService.getAlreadyBought();
	}

	function CheckOffFunc(){
		var service=this;
		var toBuyitems=[
		{name:'Mary Jane',quantity:420},
		{name:'Bong',quantity:1},
		{name:'Rolling Paper',quantity:20},
		{name:'Lighter',quantity:5},
		{name:'Snacks', qunatity:42690}];

		var alreadyBoughtItems=[];

		service.getToBuyItems=function (){
			return toBuyitems;
		};

		service.buyItem=function(index){
			var item=toBuyitems[index];

			toBuyitems.splice(index,1);
			alreadyBoughtItems.push(item);
		};

		service.getAlreadyBought=function(){
			return alreadyBoughtItems;
		};

	}
})();