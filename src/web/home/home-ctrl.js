angular.module('charbase.home-ctrl', []).controller('HomeCtrl' ['$scope', function($scope){
    this.setting = true;
    $scope.option = false;
    console.log(this.setting);
    console.log('this is the home controller');
}]);