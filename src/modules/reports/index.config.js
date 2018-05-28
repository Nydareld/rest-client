angular.module("rest-client").config([
    "$stateProvider",
    "$urlRouterProvider",
    "menuProvider",
    function($stateProvider, $urlRouterProvider, menuProvider) {
        $stateProvider.state("rest-client.reports", {
            entryName: "Incidents",
            url: "/reports",
            controller: "reportsController",
            templateUrl: "./modules/reports/index.html"
        });

        menuProvider.add({
            stateName: "rest-client.reports",
            icon: "exclamation-triangle",
            name: "Incidents"
        });
    }
]);
