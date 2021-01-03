angular.module('contactsMgr').controller('appCtrl', ['$scope', '$location', function($scope, $location){

    $scope.startSearch = function(){
        $location.path('/');
    };

    $scope.pageClass = function(path){
        return (path == $location.path()) ? 'active' : '';
    };

}]);