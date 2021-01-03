function AppCtrl($scope){

	$scope.clickHandler = function(){
		// window.alert('Clicked!');
        $scope.isHidden = !$scope.isHidden;
    };

    $scope.contacts = [
        {
            name: 'John Doe',
            phone: '01234567890',
            email: 'john@example.com'
        },
        {
            name: 'Karan Bromwich',
            phone: '09876543210',
            email: 'karan@email.com'
        }
    ];

	$scope.styleDemo = function(){
	    if(!$scope.styler){
	        return;
	    }

	    return {
	        background: 'red',
	        fontWeight: 'bold'
	    };
	};

}
