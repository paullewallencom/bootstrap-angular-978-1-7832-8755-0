angular.module('contactsMgr').directive('editable', function(){
    return {
        restrict: 'AE',
        templateUrl: '/assets/partials/editable.html',
        scope: {
            value: '=editable',
            field: '@fieldType'
        },
        controller: ['$scope', function($scope){

            $scope.field = ($scope.field) ? $scope.field : 'text';

            $scope.editor = {
                showing: false,
                value: $scope.value
            };

            $scope.toggleEditor = function(){
                $scope.editor.showing = !$scope.editor.showing;
                $scope.editor.value = $scope.value;
            };

            $scope.save = function(){
                $scope.value = $scope.editor.value;
                $scope.$emit('saved');
                $scope.toggleEditor();
            };
        }]
    };
});
