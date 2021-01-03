angular.module('contactsMgr').controller('addCtrl', ['$scope', 'contacts', '$alert', function($scope, contacts, $alert){

    var alerts = {
        success: $alert({
            title: 'Success!',
            content: 'The contact was added successfully.',
            type: 'success',
            container: '#alertContainer',
            show: false
        }),
        error: $alert({
            title: 'Error!',
            content: 'There are some validation errors.',
            type: 'danger',
            container: '#alertContainer',
            show: false
        })
    }

    $scope.contact = contacts.create();

    $scope.submit = function(){

        $scope.formErrors = false;

        if(!$scope.addForm.$valid){
            $scope.formErrors = true;
            return alerts.error.show();
        }

        $scope.contact.$save();
        $scope.contact = contacts.create();
        alerts.success.show();
    };

}])