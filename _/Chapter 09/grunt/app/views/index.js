angular.module('contactsMgr').controller('indexCtrl', ['$scope', 'contacts', '$alert', function($scope, contacts, $alert){

    $scope.contacts = contacts.get();

    $scope.modal = {
        title: 'Hello'
    };

    var alert = $alert({
        title: 'Success!',
        content: 'The contact was deleted successfully.',
        type: 'success',
        container: '#alertContainer',
        show: false
    });

    $scope.delete = function(index){
        contacts.destroy($scope.contacts[index].id);
        $scope.contacts.splice(index, 1);
        alert.show();
    };

}]);