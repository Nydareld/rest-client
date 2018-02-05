angular.module("rest-client")
.controller("RootController", ["$rootScope" ,function($rootScope){
    this.logo = {
        miniText : "test",
        img : "statics/img/icon.png",
    };
    this.user = {
        username : "Theo Guerin",
        logout : "/logout"
    };
    this.menu = $rootScope.menu;
    this.helloText = "Test layout Inspinia";
    this.descriptionText = "Ceci est un exemple/test destiné a tester le layout ";
}]);
