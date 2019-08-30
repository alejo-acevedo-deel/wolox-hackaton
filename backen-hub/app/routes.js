// const controller = require('./controllers/controller');
const { healthCheck } = require('./controllers/healthCheck');
const modulesController = require('./controllers/modules');
const presetsController = require('./controllers/presets');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/modules', modulesController.getAllModules);
  app.put('/modules', modulesController.modifyModule);
  app.post('/modules', modulesController.createModule);
  app.delete('/modules/:uniqueKey', modulesController.deleteModule);
  app.get('/presets', presetsController.getAllPresets);
  app.post('/presets', presetsController.createPreset);
  app.delete('/presets/:id', presetsController.deletePreset);
  // app.get('/endpoint/get/path', [], controller.methodGET);
  // app.put('/endpoint/put/path', [], controller.methodPUT);
  // app.post('/endpoint/post/path', [], controller.methodPOST);
};
