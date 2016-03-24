var app = angular.module('angular', []);

app.controller('sign_up', function ($scope, $http) {

$scope.check = function () {

document.getElementById("message").textContent = "";

var request = $http({
    method: "post",
    url:  "index.php",
    data: {
        email: $scope.email,
        pass: $scope.password
    },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

request.success(function (data) {
    document.getElementById("message").textContent = "You have login successfully with email "+data;
});
}
});