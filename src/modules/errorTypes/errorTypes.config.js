angular.module("rest-client").config([
    "$stateProvider",
    "menuProvider",
    function($stateProvider, menuProvider) {
        // enregistrement de l'etat logs
        $stateProvider.state("rest-client.error-types", {
            entryName: "Erreurs fonctionelles",
            url: "/error-types",
            templateUrl: "./modules/errorTypes/errorTypes.html",
            controller: "errorTypesController",
            controllerAs: "ctrl",
            resolve: {
                errorTypes: [
                    "errorTypeService",
                    function(errorTypeService) {
                        return errorTypeService.get(null, {
                            limit: 0
                        });
                    }
                ]
            }
        });

        // enregistrement de l'entrée mennue Logs
        menuProvider.add({
            stateName: "rest-client.error-types",
            name: "Erreurs fonctionelles",
            icon: "exclamation",
            importance: 100
        });
    }
]);
