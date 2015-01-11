/**
 * Created by Administrator on 2015-01-04.
 */
define([], function () {
	return function page1Ctrl($scope, $q) {
		$scope.model = {
			controllerName : arguments.callee.name
		};
		$scope.fn = {
			backButtonHandler : function () {
				var defer = $q.defer();
				if (confirm('click back button')) defer.resolve();
				else defer.reject();
				return defer.promise;
			}
		};
	};
});