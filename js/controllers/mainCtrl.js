/**
 * Created by Administrator on 2015-01-04.
 */
define([], function () {
	return function mainCtrl($scope, someService, $log) {
		$scope.model = {
			controllerName : arguments.callee.name
		}
	};
});