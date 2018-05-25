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
            name: "Accueil"
        });
    }
]);
