angular.module('app-bootstrap').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('navbar',
      {
        component: 'navbar',
        abstract: true
      }).state('navbar.abmModules',
      {
        url: '/abmModules',
        component: 'abmModules',
        params: {
          key: null,
          name: '',
          description: '',
          action: 0
        }
      }).state('navbar.home', {
        url: '/',
        component: 'home'
      }).state('navbar.modules',
      {
        url: '/modules',
        component: 'modules'
      }).state('navbar.presets',
      {
        url: '/presets',
        component: 'presets'
      }).state('navbar.stats',
      {
        url: '/stats',
        component: 'stats'
      });
    $urlRouterProvider.otherwise('/');
  }
]);
