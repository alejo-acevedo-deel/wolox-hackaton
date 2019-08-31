const angular = require('angular');

angular.module('app-bootstrap').component('abmPresets', {
  template: require('./abmPresets.pug')(),
  controller: ['$stateParams', 'presetService', function ($stateParams, presetService) {
    this.add = $stateParams.name === '';
    this.preset = {
      name: $stateParams.name,
      startHour: $stateParams.startHour,
      startMinute: $stateParams.startMinute,
      endHour: $stateParams.endHour,
      endMinute: $stateParams.endMinute,
      level: $stateParams.level,
      modIn: $stateParams.modIn,
      modOut: $stateParams.modOut,
      actionStart: $stateParams.actionStart,
      actionEnd: $stateParams.actionEnd,
      actionOn: $stateParams.actionOn,
      actionOff: $stateParams.actionOff
    };
    this.finish = () => {
      presetService.addPreset(this.preset);
    };
  }]
});
