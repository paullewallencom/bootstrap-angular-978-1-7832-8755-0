angular.module('contactsMgr').controller('contactCtrl', ['$scope', '$routeParams', 'contacts', '$timeout', function($scope, $routeParams, contacts, $timeout){
    $scope.contact = contacts.find($routeParams.id);

    $scope.$on('saved', function(){
        $timeout(function(){
            $scope.contact.$update();
        }, 0);
    });
}]);