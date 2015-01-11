/**
 * Created by Administrator on 2015-01-04.
 */
define([], function () {
	return function page1Ctrl($scope) {
		$scope.model = {
			controllerName : arguments.callee.name
		}
	};
});