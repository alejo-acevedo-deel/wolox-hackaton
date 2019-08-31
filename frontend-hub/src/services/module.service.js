const angular = require('angular');

angular.module('app-bootstrap').factory('moduleService', [
  function() {
    var listModules = [
      {
        name: 'Sensor luz',
        description: 'mama cortaste toda la looz',
        unique_key: 4241224
      },
      {
        name: 'Actuador ventana',
        description: 'dale ingrid dale',
        unique_key: 92828
      },
      {
        name: 'Sensor temp',
        description: 'que calooooooor ooeeeoooo',
        unique_key: 151212
      },
      {
        name: 'Actuador aire',
        description: 'Prendeme el airee',
        unique_key: 261617
      }
    ];
    return {
      getModules: () => listModules,
      getModuleByKey: (key) => listModules.find(module => module.unique_key === key)
    };
  }
]);
