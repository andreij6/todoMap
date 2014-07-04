var todoApp = angular.module('todoApp', ["ngRoute"]);

todoApp.config(function ($routeProvider) {
    $routeProvider.when('/',
        {
            templateUrl: "/Templates/Home.html",
            controller: "HomeCtrl"
        });
})