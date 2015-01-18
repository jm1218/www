/**
 * Created by Administrator on 2015-01-11.
 */
define([], function () {
	return function greetingService($q, $timeout) {
		var greeting = function () {
			var defer = $q.defer();
			$timeout(function () {
				defer.resolve('hello!!');
			}, 0);
			return defer.promise;
		};
		return {
			greeting : greeting
		}
	}
});