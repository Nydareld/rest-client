angular.module("rest-client")
.config(["$stateProvider", "menuProvider" , function($stateProvider  ,  menuProvider){

    // enregistrement de l'etat rest
    $stateProvider.state("rest-client.rest",{
        entryName : "Rest",
        url: "/rest",
        templateUrl: "./modules/rest/rest.html",
        controller : "restController"
    });

    // enregistrement de l'entrée mennue Rest
    menuProvider.add({
        stateName : "rest-client.rest",
        name : "Rest",
        icon : "code"
    });


}]);
