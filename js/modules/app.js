/**
 * Created by Administrator on 2015-01-04.
 */
define(
	[
		'angular'
		, 'angular-animate'
		, 'angular-cookies'
		, 'angular-route'
		, 'angular-touch'
		, 'mobile-angular-ui'
		, 'ngCordova'
		, 'modules/controllers'
		, 'modules/services'
		, 'modules/directives'
	]
	, function (angular) {
		return angular.module('app',
			[
				'ngAnimate'
				, 'ngCookies'
				, 'ngRoute'
				, 'ngTouch'
				, 'mobile-angular-ui'
				, 'ngCordova'
				, 'app.controllers'
				, 'app.services'
				, 'app.directives'
			]
		);
	}
);