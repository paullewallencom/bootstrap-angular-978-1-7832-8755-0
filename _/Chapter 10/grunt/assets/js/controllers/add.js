angular.module('contactsMgr').controller('addCtrl', ['$scope', 'contacts', '$alert', function($scope, contacts, $alert){

    var alert = $alert({
        title: 'Success!',
        content: 'The contact was added successfully.',
        type: 'success',
        container: '#alertContainer',
        show: false
    });

    $scope.contact = contacts.create();

    $scope.submit = function(){
        $scope.contact.$save();
        $scope.contact = contacts.create();
        alert.show();
    };

}])