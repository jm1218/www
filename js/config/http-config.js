define(['app'], function (app) {
	app.config(function ($httpProvider) {
		//Enable cross domain calls
		$httpProvider.defaults.useXDomain = true;
		//Remove the header used to identify ajax call  that would prevent CORS from working
		delete $httpProvider.defaults.headers.common['X-Requested-With'];

		//http loading indicator
		$httpProvider.interceptors.push(function ($q, $rootScope) {
			return {
				'request': function (config) {
					$rootScope.$broadcast('$httpLoadingStart');
					return config || $q.when(config);
				},
				'requestError': function (rejection) {
					alert('requestError(error code) : ' + rejection.status);
					return rejection || $q.when(rejection);
				},
				'response': function (response) {
					$rootScope.$broadcast('$httpLoadingComplete');
					return response || $q.when(response);
				},
				'responseError': function (rejection) {
					$rootScope.$broadcast('$httpLoadingComplete');
					alert('responseError(error code) : ' + rejection.status);
					console.log('responseError(error code) : '+rejection.status);
					return rejection || $q.when(rejection);
				}
			};
		});
	})
});