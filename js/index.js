/**
 * Created by Administrator on 2015-01-02.
 */
define([], function () {
	var PLATFORM = {iOS : 'iOS', Android : 'Android', others : 'unknown'};
	var getMobileOperatingSystem = function () {
		var userAgent = navigator.userAgent || navigator.vendor || window.opera;

		if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
			return PLATFORM.iOS;
		} else if (userAgent.match(/Android/i)) {
			return PLATFORM.Android;
		} else {
			return PLATFORM.others;
		}
	};

	var mobileOperatingSystem = getMobileOperatingSystem();
	var nextProcess = function () {
		return requirejs(['config/require-config']);
	};

	if (mobileOperatingSystem === PLATFORM.iOS || mobileOperatingSystem === PLATFORM.Android) {
		requirejs(['../cordova'], function () {
			nextProcess();
		});
	} else {
		nextProcess();
	}
});