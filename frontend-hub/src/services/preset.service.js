const angular = require('angular');

angular.module('app-bootstrap').service('presetService', [
  'httpService',
  function(httpService) {
    return {
      addPreset: (body) => httpService.post('presets/', { body: body }),
      getPresets: () => httpService.get('presets/')
    };
  }
]);
