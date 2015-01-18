/**
 * Created by Administrator on 2015-01-04.
 */
define(['app'], function (app) {
	app.config(function ($routeProvider) {
		$routeProvider.otherwise('/main')

			.when('/main', {
				templateUrl : 'partials/main.html',
				controller : 'mainCtrl',
				reloadOnSearch: false,
				resolve : {
					greeting : function (greetingService) {
						return greetingService.greeting();
					}
				}
			})

			.when('/page1', {
				templateUrl : 'partials/page1.html',
				controller : 'page1Ctrl',
				reloadOnSearch: false,
				resolve : {
					greeting : function (greetingService) {
						return greetingService.greeting();
					}
				}
			})

			.when('/page2', {
				templateUrl : 'partials/page2.html',
				controller : 'page2Ctrl',
				reloadOnSearch: false,
				resolve : {
					greeting : function (greetingService) {
						return greetingService.greeting();
					}
				}
			})
			.when('/someUrl', {});
	});
});