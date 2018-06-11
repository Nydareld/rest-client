angular.module("rest-client").controller("reportController", [
    "$scope",
    "report",
    "logs",
    "logService",
    "reportService",
    function($scope, report, logs, logService, reportService) {
        $scope.logs = logs;
        $scope.report = report;
    }
]);
