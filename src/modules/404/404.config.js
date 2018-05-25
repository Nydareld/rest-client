angular.module("rest-client").config([
    "$stateProvider",
    function($stateProvider) {
        $stateProvider.state("rest-client.404", {
            url: "/404",
            templateUrl: "./modules/404/404.html"
        });
    }
]);
