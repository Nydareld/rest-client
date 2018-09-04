angular.module("rest-client").controller("reportController", [
    "$scope",
    "report",
    "logs",
    "logService",
    "reportService",
    function($scope, report, logs, logService, reportService) {
        console.log(logs);
        $scope.logs = logs;
        $scope.report = report;
    }
]);
