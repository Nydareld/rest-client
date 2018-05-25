angular.module("rest-client")
.controller("logsController",[ "$scope","$http", function($scope,$http){
    $scope.config={};

    var requestHandler = function(res) {
        $scope.data = res.data;
        $scope.headers = res.headers;
        $scope.raw = res;

    }

    $scope.formName = "customerForm";
    $scope.params={
        limit:25,
        start:0
    }
    $scope.formStructure = [
        {
            "title" : "Parametres généraux",
            "type" : "separator"
        },{
            "allowBlank": true,
            "label": "Limite",
            "name": "limit",
            "type": "number"
        },{
            "allowBlank": true,
            "label": "Début",
            "name": "start",
            "type": "number"
        },{
            "title" : "Parametres D'api",
            "type" : "separator"
        },{
            "allowBlank": true,
            "label": "Début",
            "name": "app",
            "type": "choice",
            "items":[
                "info","error","debug","warning"
            ]
        }
    ];

    $scope.getLogs = function(params){
        console.log(params);
        $http({
            method : "GET",
            params : params ,
            url : "http://redway.nrco.fr:1880/qual/nrcom/logs"
        }).then(requestHandler)
        .catch(requestHandler);

    };


}]);
