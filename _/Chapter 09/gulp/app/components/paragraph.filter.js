angular.module('contactsMgr').filter('paragraph', function(){
    return function(input){
        return (input) ? input.replace(/\n/g, '<br />') : '';
    };
});
