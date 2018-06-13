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

angular.module("rest-client").filter("stripHtml", function() {
    return function(input) {
        return input.replace(/<[^>]*>/g, "");
    };
});

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
            controllerAs: "ctrl",
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
        const me = this;
        $scope.logs = logs;
        this.defaultLimitSize = 50;
        this.limitSize = this.defaultLimitSize;

        // fournis les logs selon la limite courante
        this.refreshLogs = function() {
            logService
                .get(null, {
                    limit: me.limitSize
                })
                .then(function(res) {
                    $scope.logs = res;
                })
                .catch(function(err) {
                    throw err;
                });
        };

        // ajoute plus d'éléments et rafraichis
        this.getMoreLogs = function() {
            me.limitSize += me.defaultLimitSize;
            me.refreshLogs();
        };
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

angular.module("rest-client").service("errorTypeService", [
    "appResourceProxy",
    function(resource) {
        return resource("/error/error-types");
    }
]);

angular.module("rest-client").service("logService", [
    "appResourceProxy",
    function(resource) {
        return resource("/error/log");
    }
]);

angular.module("rest-client").service("reportService", [
    "appResourceProxy",
    function(resource) {
        return resource("/error/error");
    }
]);
