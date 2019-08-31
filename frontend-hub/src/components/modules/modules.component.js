const angular = require('angular');

angular.module('app-bootstrap').component('modules', {
  template: require('./modules.pug')(),
  controller: ['moduleService', function (moduleService) {
    this.modules = moduleService.getModules();
    this.deleteModule = (key) => moduleService.deleteModule(key);
  }]
});
