mainApp.controller('MainCtrl', MainCtrl)
MainCtrl.$inject=["$scope"]
function MainCtrl($scope) {
	var vm = this;
	angular.extend(vm,{
		prueba:"hola mundo2",
	});

	console.log("Funciono");
	this.$onInit=function() {
		
	}

}
