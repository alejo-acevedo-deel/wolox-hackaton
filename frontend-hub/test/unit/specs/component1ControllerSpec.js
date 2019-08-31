'use strict';

describe('Component 1', function () {

  var modulesController;

  beforeEach(function () {
    module('app-bootstrap');
  });

  beforeEach(inject(function ($controller) {
    modulesController = $controller('modulesController', {});
  }));

  it('gets components phrase', function () {
    expect(modulesController.modulesPhrase).not.toBeNull();
    expect(modulesController.modulesPhrase).toEqual('This is component 1');
  });

});
