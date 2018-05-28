angular.module("rest-client").controller("reportsController", [
    "$scope",
    "reports",
    "reportService",
    function($scope, reports, reportService) {
        $scope.reports = reports;
    }
]);
