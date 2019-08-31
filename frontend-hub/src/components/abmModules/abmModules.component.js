const angular = require('angular');

angular.module('app-bootstrap').component('abmModules', {
  template: require('./abmModules.pug')(),
  controller: ['$stateParams', 'moduleService', function ($stateParams, moduleService) {
    this.module = {
      unique_key: $stateParams.key,
      name: $stateParams.name,
      description: $stateParams.description
    };
    this.finish = () => {
      switch ($stateParams.action) {
      case 0: //  Agregar
        moduleService.addModule(this.module);
        break;
      case 1: //  modificar
        moduleService.modifyModule(this.module);
        break;
      }
    };
  }]
});
