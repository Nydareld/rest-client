angular.module("rest-client").config([
    "$stateProvider",
    "$urlRouterProvider",
    "menuProvider",
    function($stateProvider, $urlRouterProvider, menuProvider) {
        $stateProvider.state("rest-client.reports", {
            entryName: "Incidents",
            url: "/reports",
            controller: "reportsController",
            controllerAs: "ctrl",
            templateUrl: "./modules/reports/index.html",
            resolve: {
                reports: [
                    "reportService",
                    function(reportService) {
                        return reportService.get(null, {
                            limit: 0
                        });
                    }
                ]
            }
        });

        menuProvider.add({
            stateName: "rest-client.reports",
            icon: "exclamation-triangle",
            name: "Incidents"
        });
    }
]);
