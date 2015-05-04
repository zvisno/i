define('service.general.city', ['angularAMD', 'service.general.city.link', 'service.general.city.built-in'], function (angularAMD) {
    var app = angular.module('service.general.city', []);

    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('service.general.city', {
                url: '/city',
				resolve: {
					places: ['$stateParams', 'ServiceService', function($stateParams, ServiceService) {
						return ServiceService.getPlaces();
					}]
				},
                views: {
                    '@service': angularAMD.route({
                        templateProvider: ['$templateCache', function($templateCache) {
							return $templateCache.get('html/service/city/index.html');
						}],
						controller: 'ServiceCityController',
                        controllerUrl: 'state/service/city/controller'
                    }),
					'content@service.general.city': angularAMD.route({
                        templateProvider: ['$templateCache', function($templateCache) {
							return $templateCache.get('html/service/city/content.html');
						}]
                    })
                }
            })
            .state('service.general.city.error', {
                url: '/error',
                views: {
					'content@service.general.city': angularAMD.route({
                        templateProvider: ['$templateCache', function($templateCache) {
							return $templateCache.get('html/service/city/error.html');
						}]
                    })
                }
            })
    }]);
    return app;
});