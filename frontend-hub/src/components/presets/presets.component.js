const angular = require('angular');

angular.module('app-bootstrap').component('presets', {
  template: require('./presets.pug')(),
  controller: ['presetService', function (presetService) {
    presetService.getPresets()
    .then((response) => {
      this.presets = response.data;
    });
  }]
});
