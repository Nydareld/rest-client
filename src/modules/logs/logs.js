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
