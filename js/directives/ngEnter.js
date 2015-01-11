/**
 * Created by jm1218 on 15. 1. 9.
 */
define([], function () {
	return function ngEnter() {
		return {
			link : function ($scope, $element, $attrs) {
				$element.on('keydown keypress', function (event) {
					if (event.which === 13) {
						$scope.$apply(function () {
							$scope.$eval($attrs['ngEnter']);
						});
					}
//					event.preventDefault();
				});
			}
		}
	};
});
