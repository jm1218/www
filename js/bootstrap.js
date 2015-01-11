/**
 * Created by Administrator on 2015-01-02.
 */
requirejs(
	[
		'domReady!'
		, 'app'
		, 'config/route-config'
		, 'config/http-config'
		, 'constants'
	], function () {
		angular.element(document).ready(function () {
			angular.bootstrap(document.querySelector('body'), ['app']);
		});
	});
