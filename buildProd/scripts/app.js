/**
 * Déclaration du module
 */
angular.module("rest-client", [
    "ui.router", // Routing
    "ui.bootstrap", // Ui Bootstrap
    "ngSanitize", // Sanitize
    "pascalprecht.translate", // Translate
    "nrcomInspinia", // Theme custom insmina
    "ui.ace"
]);

var modulesToRun = ["rest-client"];

/**
 * Configuration de base:
 *      - Route par defaut
 *      - Mode html5 des url
 *      - Etat root
 */

var keycloakJson = {
    realm: "master",
    url: "http://plv2-qual.nrco.fr/auth",
    clientId: "error-manager",
    "ssl-required": "external",
    "public-client": true
};

angular
    .module("rest-client")
    .config([
        "$stateProvider",
        "$urlRouterProvider",
        "$locationProvider",
        function($stateProvider, $urlRouterProvider, $locationProvider) {
            // Configuration du mode HTML5 de locationProvider
            $locationProvider
                .html5Mode({
                    enabled: false,
                    requireBase: true,
                    rewriteLinks: true
                })
                .hashPrefix("");

            // url par defaut : /404
            $urlRouterProvider.otherwise("/404");

            // Déclaration de l'index, noeud de base duquel heriteront d'autre noeuds
            $stateProvider.state("rest-client", {
                abstract: true,
                controller: "RootController",
                templateUrl: "./modules/common/content.html"
            });
        }
    ])
    .run(function($rootScope, $state) {
        // Lancement de la machien a etat
        $rootScope.$state = $state;
    });

angular.module("rest-client").constant("globals", {
    plApi: {
        baseUrl: "/api/v1"
    },
    debug: true,
    debugRouter: false,
    sampleData: true
});

angular.module("rest-client").config([
    "$stateProvider",
    function($stateProvider) {
        $stateProvider.state("rest-client.404", {
            url: "/404",
            templateUrl: "./modules/404/404.html"
        });
    }
]);

angular.module("rest-client").controller("RootController", [
    "$rootScope",
    function($rootScope) {
        this.logo = {
            miniText: "test",
            img: "statics/img/icon.png"
        };
        this.user = {
            username: "Theo Guerin",
            logout: "/logout"
        };
        this.menu = $rootScope.menu;
        this.helloText = "Test layout Inspinia";
        this.descriptionText =
            "Ceci est un exemple/test destiné a tester le layout ";
    }
]);

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

angular.module("rest-client").controller("errorTypesController", [
    "$scope",
    "errorTypes",
    "errorTypeService",
    "swal",
    "toaster",
    function($scope, errorTypes, errorTypeService, swal, toaster) {
        $scope.errorType = {}; // élément contenant un nouveau type d'erreur
        $scope.errorTypes = errorTypes; // liste des types d'erreurs

        // ajoute ou modifie une errorType
        this.addType = function(data) {
            var promise,
                phantom = angular.isUndefined(data._id);

            // on drive la méthode en fonction du type d'objet transmis
            if (phantom) {
                promise = errorTypeService.post(data);
            } else {
                promise = errorTypeService.put(data);
            }

            promise
                .then(function(res) {
                    if (phantom) {
                        // dans le cas d'une créa on l'ajoute au tableau
                        $scope.errorTypes.unshift(data);
                        $scope.errorType = {};
                    } else {
                        // dans le cas d'une modification on le met à jour
                        data = res;
                    }
                    // dans tous les cas on envoi une notification de réussite
                    toaster.success(
                        "Sauvegarde réussie",
                        "Type enregistré avec succès"
                    );
                })
                .catch(function(err) {
                    toaster.error("Erreur", err);
                    throw err;
                });
        };

        // supprime un errorType
        this.deleteType = function(type) {
            swal
                .confirmDelete({
                    title: "Supression",
                    text:
                        "Êtes vous sûre de vouloir supprimer ce type d'erreur ?",
                    closeOnConfirm: false,
                    closeOnCancel: false
                })
                .then(function() {
                    return errorTypeService.delete(type);
                })
                .then(function() {
                    $scope.errorTypes.splice(
                        $scope.errorTypes.indexOf(type),
                        1
                    );
                })
                .catch(function(err) {
                    if (err !== true) {
                        toaster.error("Erreur", err);
                        throw err;
                    }
                });
        };
    }
]);

angular.module("rest-client").config([
    "$stateProvider",
    "$urlRouterProvider",
    "menuProvider",
    function($stateProvider, $urlRouterProvider, menuProvider) {
        $stateProvider.state("rest-client.index", {
            entryName: "Accueil",
            url: "/index",
            controller: "indexController",
            templateUrl: "./modules/index/index.html"
        });

        menuProvider.add({
            stateName: "rest-client.index",
            icon: "home",
            name: "Accueil",
            importance: 0
        });
    }
]);

angular.module("rest-client").controller("indexController", [function() {}]);

angular.module("rest-client").config([
    "$stateProvider",
    "menuProvider",
    function($stateProvider, menuProvider) {
        // enregistrement de l'etat logs
        $stateProvider.state("rest-client.logs", {
            entryName: "Logs",
            url: "/logs",
            templateUrl: "./modules/logs/logs.html",
            controller: "logsController",
            resolve: {
                logs: [
                    "logService",
                    function(logService) {
                        return logService.get();
                    }
                ]
            }
        });

        // enregistrement de l'entrée mennue Logs
        menuProvider.add({
            stateName: "rest-client.logs",
            name: "Logs",
            icon: "terminal"
        });
    }
]);

angular.module("rest-client").controller("logsController", [
    "$scope",
    "logs",
    "logService",
    function($scope, logs, logService) {
        $scope.logs = logs;
        //
        // $scope.config = {};
        //
        // var requestHandler = function(res) {
        //     $scope.data = res.data;
        //     $scope.headers = res.headers;
        //     $scope.raw = res;
        // };
        //
        // $scope.formName = "customerForm";
        // $scope.params = {
        //     limit: 25,
        //     start: 0
        // };
        // $scope.formStructure = [
        //     {
        //         title: "Parametres généraux",
        //         type: "separator"
        //     },
        //     {
        //         allowBlank: true,
        //         label: "Limite",
        //         name: "limit",
        //         type: "number"
        //     },
        //     {
        //         allowBlank: true,
        //         label: "Début",
        //         name: "start",
        //         type: "number"
        //     },
        //     {
        //         title: "Parametres D'api",
        //         type: "separator"
        //     },
        //     {
        //         allowBlank: true,
        //         label: "Début",
        //         name: "app",
        //         type: "choice",
        //         items: ["info", "error", "debug", "warning"]
        //     }
        // ];
        //
        // $scope.getLogs = function(params) {
        //     console.log(params);
        //     $http({
        //         method: "GET",
        //         params: params,
        //         url: "http://redway.nrco.fr:1880/qual/nrcom/logs"
        //     })
        //         .then(requestHandler)
        //         .catch(requestHandler);
        // };
    }
]);

angular.module("rest-client").config([
    "$stateProvider",
    "$urlRouterProvider",
    "menuProvider",
    function($stateProvider, $urlRouterProvider, menuProvider) {
        $stateProvider.state("rest-client.reports", {
            entryName: "Incidents",
            url: "/reports",
            controller: "reportsController",
            templateUrl: "./modules/reports/index.html",
            resolve: {
                reports: [
                    "reportService",
                    function(reportService) {
                        return reportService.get();
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

angular.module("rest-client").controller("reportsController", [
    "$scope",
    "reports",
    "reportService",
    function($scope, reports, reportService) {
        $scope.reports = reports;
    }
]);

angular.module("rest-client").service("errorTypeService", [
    "appResourceProxy",
    function(resource) {
        return resource("/error-types");
    }
]);

angular.module("rest-client").service("logService", [
    "appResourceProxy",
    function(resource) {
        return resource("/log");
    }
]);

angular.module("rest-client").service("reportService", [
    "appResourceProxy",
    function(resource) {
        return resource("/error");
    }
]);
