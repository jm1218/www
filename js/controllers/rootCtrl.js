/**
 * Created by Administrator on 2015-01-11.
 */
define([], function () {
	return function rootCtrl($rootScope) {
		$rootScope.$on('$routeChangeStart', function(){
			$rootScope.loading = true;
		});

		$rootScope.$on('$routeChangeSuccess', function(){
			$rootScope.loading = false;
		});
	};
});