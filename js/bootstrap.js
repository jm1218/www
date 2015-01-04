/**
 * Created by Administrator on 2015-01-02.
 */
requirejs(
	[
			'domReady!'
		, 'app'
		, 'config/route-config'
	], function () {
	angular.element(document).ready(function () {
		angular.bootstrap(document, ['app']);
	});
});
