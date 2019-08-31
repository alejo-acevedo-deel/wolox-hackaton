const angular = require('angular');

angular.module('app-bootstrap').component('presets', {
  template: require('./presets.pug')(),
  controller: [function () {
    this.presetsPhrase = 'This is component 2';
  }]
});
