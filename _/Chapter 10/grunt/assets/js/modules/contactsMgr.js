angular.module('contactsMgr', ['contactsMgr.directives', 'contactsMgr.filters', 'contactsMgr.services', 'ngRoute', 'ngSanitize', 'mgcrea.ngStrap', 'ngResource'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $routeProvider.when('/', {
        controller: 'indexCtrl',
        templateUrl: '/assets/partials/index.html'
    })

    .when('/add-contact', {
        controller: 'addCtrl',
        templateUrl: '/assets/partials/add.html'
    })

    .when('/contact/:id', {
        controller: 'contactCtrl',
        templateUrl: '/assets/partials/contact.html'
    })

    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

}]);