/**
 * Created by Administrator on 2015-01-04.
 */
define([], function () {
	return function mainCtrl($scope, someService, $log, greeting) {
		$scope.model = {
			controllerName : arguments.callee.name,
			greeting : greeting
		};

	};
});