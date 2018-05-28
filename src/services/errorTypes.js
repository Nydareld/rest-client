angular.module("rest-client").service("errorTypeService", [
    "appResourceProxy",
    function(resource) {
        return resource("/error-type");
    }
]);
