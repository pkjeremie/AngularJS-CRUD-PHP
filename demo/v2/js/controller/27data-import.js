"use strict";
app.controller('importController', ['$scope', 'Security', function ($scope, Security, $rootScope) {
	
    function Initialize(){
	  $scope.importModel = {};
    }
    Initialize();

    $scope.EventListener = function(scope, iElement, iAttrs, controller){
        iElement.ready(function() {

        })
    }

	$scope.SetDefaultValue = function(scope, iElement, iAttrs, controller){
	}

	$scope.StatusChange = function(fieldName, newValue, newObj, scope, iElement, iAttrs, controller){
	}

	$scope.ValidateBuffer = function(scope, iElement, iAttrs, controller){
		var isValid = true;
		var record = controller.ngModel;
		var msg = [];

		return isValid;
	}
}]);