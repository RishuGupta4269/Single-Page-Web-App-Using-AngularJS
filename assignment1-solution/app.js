(function(){
'use strict';


angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchChecker);

LunchChecker.$inject=['$scope'];

function LunchChecker($scope){
	$scope.in="";
	$scope.message="";
	$scope.empty=false;
	$scope.check_start=false;
	
	$scope.dispMSG=function(){
		var s=$scope.in;
		if(s.trim().length==0)
			$scope.empty=true;
		else{
			$scope.check_start=true;
			$scope.empty=false;
			var arr=s.split(',');
			var msg="";
			var k=0;
			for(var i=0;i<arr.length;i++){
				if(arr[i].trim().length>0){
					k++;
				}
			}
			if(k==0){//only commas case 
				$scope.empty=true;
			}
			else
			if(k<=3){
				msg="Enjoy!";
			}
			else
				msg="Too much!";

			$scope.message=msg;
		}
	}
}



})();