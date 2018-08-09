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

// config with qual keycloak
var hostname = window.location.hostname;
if (/localhost/.test(hostname) || /plv2\-qual\.nr(?:co|)\.fr/.test(hostname)) {
    keycloakJson.url = "http://auth-qual.nr.fr/auth";
} else if (/plv2\.nr(?:co|)\.fr/.test(hostname)) {
    keycloakJson.url = "http://auth.nr.fr/auth";
}

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
