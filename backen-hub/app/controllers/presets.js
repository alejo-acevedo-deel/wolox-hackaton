const modulesServices = require('../services/modules.js');

exports.getAllPresets = (req, res, next) =>
  modulesServices
    .getAll()
    .then(modules => res.status(200).send(modules))
    .catch(err => next(err));

exports.createPreset = (req, res, next) =>
  modulesServices
    .createOne(req.body)
    .then(() => res.status(201).send())
    .catch(err => next(err));

exports.deletePreset = (req, res, next) =>
  modulesServices
    .deleteOne(req.param.uniqueKey)
    .then(res.status(200).end())
    .catch(err => next(err));
