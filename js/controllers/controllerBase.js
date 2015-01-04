/**
 * Created by Administrator on 2015-01-05.
 */
define(
	[
		'controllers/mainCtrl',
		'controllers/page1Ctrl',
		'controllers/page2Ctrl'
	]
	, function () {

		var controllers = arguments;
		var module = angular.module('app.controllers', []);
		angular.forEach(controllers, function (fn) {
			module.controller(fn.name, fn);
		});

		return module;
});