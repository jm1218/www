/**
 * Created by Administrator on 2015-01-04.
 */
requirejs.config({
	baseUrl : 'js',
	paths : {
		'jquery' : '../libs/jquery/dist/jquery.min',
		'angular' : '../libs/angular/angular.min',
		'angular-animate' : '../libs/angular-animate/angular-animate.min',
		'angular-cookies' : '../libs/angular-cookies/angular-cookies.min',
		'angular-route' : '../libs/angular-route/angular-route.min',
		'angular-touch' : '../libs/angular-touch/angular-touch.min',
		'mobile-angular-ui' : '../libs/mobile-angular-ui/dist/js/mobile-angular-ui.min',
		'ngCordova' : '../libs/ngCordova/dist/ng-cordova.min',
		'domReady' : '../libs/requirejs-domready/domReady',
		'app' : 'modules/app'
	},
	shim : {
		'angular' : {
			deps : ['jquery'],
			exports : 'angular'
		},
		'angular-animate' : ['angular'],
		'angular-cookies' : ['angular'],
		'angular-route' : ['angular'],
		'angular-touch' : ['angular'],
		'mobile-angular-ui' : ['angular'],
		'ngCordova' : ['angular'],
		'modules/controllers' : ['angular'],
		'modules/services' : ['angular'],
		'moudles/directives' : ['angular']
	}
});

requirejs(['bootstrap']);