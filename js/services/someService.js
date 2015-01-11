/**
 * Created by Administrator on 2015-01-05.
 */
define([], function () {
	return function someService(Const, $log) {
		$log.debug(Const.URL_SERVER);
		return {
			test1 : 'test1!!',
			test2 : 'test2!!'
		}
	}
});