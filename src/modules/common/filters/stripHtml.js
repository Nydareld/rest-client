angular.module("rest-client").filter("stripHtml", function() {
    return function(input) {
        return input.replace(/<[^>]*>/g, "");
    };
});
