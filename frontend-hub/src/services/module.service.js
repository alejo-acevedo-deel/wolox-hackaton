const angular = require('angular');

angular.module('app-bootstrap').service('moduleService', [
  'httpService',
  function(httpService) {
    return {
      addModule: (unModule) => httpService.post('modules', { body: unModule }),
      getModules: () => httpService.get('modules')
    };
  }
]);
