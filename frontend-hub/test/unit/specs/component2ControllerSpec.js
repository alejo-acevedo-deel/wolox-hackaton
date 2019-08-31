'use strict';

describe('Component 2', function () {

  var presetsController;

  beforeEach(function () {
    module('app-bootstrap');
  });

  beforeEach(inject(function ($controller) {
    presetsController = $controller('presetsController', {});
  }));

  it('gets components phrase', function () {
    expect(presetsController.presetsPhrase).not.toBeNull();
    expect(presetsController.presetsPhrase).toEqual('This is component 2');
  });

});
