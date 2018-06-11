angular.module("rest-client").controller("reportsController", [
    "$scope",
    "reports",
    "reportService",
    function($scope, reports, reportService) {
        $scope.reports = reports;
        this.refreshReports = function() {
            reportService
                .get(null, {
                    limit: 0
                })
                .then(function(res) {
                    $scope.reports = res;
                })
                .catch(function(err) {
                    throw err;
                });
        };
    }
]);
