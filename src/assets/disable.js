var app = angular.module('MyApp', [])
app.controller('MyController', function ($scope) {
    //Initialize the value to Blank.
    $scope.PassportNumber = "";

    //This will disable the Button by default.
    $scope.IsDisabled = true;

    $scope.EnableDisable = function () {
        //If TextBox has value, the Button will be enabled else vice versa.
        $scope.IsDisabled = $scope.PassportNumber.length == 0;
    }
});