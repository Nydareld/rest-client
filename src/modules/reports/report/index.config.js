angular.module("rest-client").config([
    "$stateProvider",
    "$urlRouterProvider",
    "menuProvider",
    function($stateProvider, $urlRouterProvider, menuProvider) {
        $stateProvider.state("rest-client.reports.report", {
            entryName: [
                "report",
                function(report) {
                    return "Rapport " + report._id;
                }
            ],
            url: "/:id",
            controller: "reportController",
            controllerAs: "ctrl",
            templateUrl: "./modules/reports/report/index.html",
            resolve: {
                report: [
                    "reportService",
                    "$stateParams",
                    function(reportService, $stateParams) {
                        console.log($stateParams);
                        return reportService.getById({ _id: $stateParams.id });
                    }
                ],
                logs: [
                    "logService",
                    "report",
                    function(logService, report) {
                        const reportDate = new Date(report.date);
                        return logService.get(null, {
                            filter: JSON.stringify({
                                date: {
                                    $lt: new Date(
                                        reportDate.getTime() + 1000 * 60
                                    ),
                                    $gt: new Date(
                                        reportDate.getTime() - 1000 * 60
                                    )
                                }
                            })
                        });
                    }
                ]
            }
        });
    }
]);
