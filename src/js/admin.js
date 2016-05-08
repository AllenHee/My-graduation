var app = angular.module('admin', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('index');
  $stateProvider
    .state('index', {
      url: 'index',
      templateurl: '../../content/admin/admin-index.html',
    })
}])