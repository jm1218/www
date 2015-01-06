/**
 * Created by Administrator on 2015-01-04.
 */
define([], function () {
	return function mainCtrl(someService, $log) {
		$log.debug('mainCtrl');
		$log.debug('service data : ' + someService.test1);
		$log.debug('service data : ' + someService.test2);
	};
});