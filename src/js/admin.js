import poolCtrl from './controllers/poolCtrl.js';

var app = angular.module('admin', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/visitor');
  $stateProvider
    .state('index', {
      url: '/index',
      templateUrl: '../../content/admin/admin-index.html',
      controller: ''
    })
    .state('createNew', {
      url: '/createNew',
      templateUrl: '../../content/admin/admin-createNew.html',
    })
    .state('pool', {
      url: '/pool',
      templateUrl: '../../content/admin/admin-pool.html',
      controller: 'poolCtrl'
    })
    .state('toDeal', {
      url: '/toDeal',
      templateUrl: '../../content/admin/admin-toDeal.html',
    })
    .state('visitor', {
      url: '/visitor',
      templateUrl: '../../content/admin/admin-visitor.html',
    })
    
    
}])
  .controller('poolCtrl', poolCtrl);
