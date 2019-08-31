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
          uniqueKey: null,
          name: '',
          description: ''
        }
      }).state('navbar.abmPresets',
      {
        url: '/abmPresets',
        component: 'abmPresets',
        params: {
          name: '',
          startHour: 0,
          startMinute: 0,
          endHour: 0,
          endMinute: 0,
          level: '',
          modIn: '',
          modOut: '',
          actionStart: ' ',
          actionEnd: ' ',
          actionOn: ' ',
          actionOff: ' '
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
