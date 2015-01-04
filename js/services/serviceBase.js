define(
	[
		'services/someService'
	]
	, function () {

		var controllers = arguments;
		var module = angular.module('app.services', []);
		angular.forEach(controllers, function (fn) {
			module.factory(fn.name, fn);
		});

		return module;
	});