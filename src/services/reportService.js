angular.module("rest-client").service("reportService", [
    "appResourceProxy",
    function(resource) {
        return resource("/error");
    }
]);
