/**
 * Created by Administrator on 2015-01-11.
 */
/**
 * Created by jm1218 on 15. 1. 9.
 */
define(
	[
		'directives/ngEnter'
		, 'directives/ngBack'
	]
	, function () {
		var directives = arguments;
		var module = angular.module('app.directives', []);
		angular.forEach(directives, function (fn) {
			module.directive(fn.name, fn);
		});
		return module;
	});