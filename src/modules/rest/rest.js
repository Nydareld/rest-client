angular.module("rest-client").controller("restController", [
    "$scope",
    "$http",
    function($scope, $http) {
        $scope.config = {};

        var requestHandler = function(res) {
            $scope.data = res.data;
            $scope.headers = res.headers;
            $scope.raw = res;
        };

        $scope.sendRequst = function() {
            $http({
                method: $scope.config.method || "GET",
                url: $scope.config.url || "localhost:80",
                data: $scope.config.data || null
            })
                .then(requestHandler)
                .catch(requestHandler);
        };
    }
]);
