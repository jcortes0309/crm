var app = angular.module("crm_app", ["ui.router", "ngCookies"]);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state({
    name: "home",
    url: "/",
    templateUrl: "/views/home.html"
  });

  $urlRouterProvider.otherwise("/");
});
