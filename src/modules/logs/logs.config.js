angular.module("rest-client").config([
    "$stateProvider",
    "menuProvider",
    function($stateProvider, menuProvider) {
        console.log("here");
        // enregistrement de l'etat logs
        $stateProvider.state("rest-client.logs", {
            entryName: "Logs",
            url: "/logs",
            templateUrl: "./modules/logs/logs.html",
            controller: "logsController"
        });

        // enregistrement de l'entrée mennue Logs
        menuProvider.add({
            stateName: "rest-client.logs",
            name: "Logs",
            icon: "terminal"
        });
    }
]);
