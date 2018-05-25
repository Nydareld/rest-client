angular.module("rest-client").config([
    "$stateProvider",
    function($stateProvider) {
        $stateProvider.state("login", {
            url: "/login",
            templateUrl: "./modules/login/login.html"
        });
    }
]);
