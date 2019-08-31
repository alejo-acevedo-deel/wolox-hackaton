const presetsServices = require('../services/presets.js');

exports.getAllPresets = (req, res, next) =>
  presetsServices
    .getAll()
    .then(modules => res.status(200).send(modules))
    .catch(err => next(err));

exports.createPreset = (req, res, next) =>
  presetsServices
    .createOne(req.body)
    .then(() => res.status(201).send())
    .catch(err => next(err));

exports.deletePreset = (req, res, next) =>
  presetsServices
    .deleteOne(req.params.id)
    .then(res.status(200).end())
    .catch(err => next(err));
