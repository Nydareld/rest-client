angular.module("rest-client").service("logService", [
    "appResourceProxy",
    function(resource) {
        return resource("/error/log");
    }
]);
