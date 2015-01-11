/**
 * Created by jm1218 on 15. 1. 9.
 */
define([], function () {
	return function ngBack($window) {
		return {
			link : function ($scope, $element, $attrs) {
				var hook = $attrs['ngBack'];
				$element.on('click', function () {
					if (hook) {
						$scope.$apply(hook).then(function () {
							$window.history.back();
						});
					} else {
						$scope.$apply(function () {
							$window.history.back();
						});
					}
				});
			}
		}
	};
});
