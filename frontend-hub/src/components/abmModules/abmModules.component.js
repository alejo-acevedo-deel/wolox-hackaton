const angular = require('angular');

angular.module('app-bootstrap').component('abmModules', {
  template: require('./abmModules.pug')(),
  controller: ['$stateParams', 'moduleService', function ($stateParams, moduleService) {
    this.add = $stateParams.key === null;
    this.module = {
      uniqueKey: $stateParams.uniqueKey,
      name: $stateParams.name,
      description: $stateParams.description
    };
    this.finish = () => {
      moduleService.addModule(this.module);
    };
  }]
});
