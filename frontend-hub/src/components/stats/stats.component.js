const angular = require('angular');

angular.module('app-bootstrap').component('stats', {
  template: require('./stats.pug')(),
  controller: ['anyService', function (anyService) {
    this.modulesPhrase = anyService.getMessage();
  }]
});
