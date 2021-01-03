angular.module('contactsMgr.services', ['ngResource'])

/*-----------------------------------
| Error Interceptor
------------------------------------*/

.factory('errorInterceptor', ['$q', '$rootScope', function($q, $rootScope){
    return {
        response: function(response){
            $rootScope.responseError = null;
            return response;
        },
        responseError: function(rejection){
            $rootScope.responseError = rejection.data;
            return $q.reject(rejection);
        }
    };
}])

/*-----------------------------------
| Contacts Service
------------------------------------*/

.factory('contacts', ['$resource', function($resource){
    var resource = $resource('http://localhost:8000/contacts/:id', {id: '@id'}, {
        update: {method: 'PUT'}
    });
    return {
        get: function(success, error){
            return resource.query();
        },
        find: function(id, success, error){
            return resource.get({id: id}, success, error);
        },
        create: function(){
            return new resource();
        },
        destroy: function(id, success, error){
            resource.delete({id: id});
        }
    };
}]);