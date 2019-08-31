const modulesServices = require('../services/modules.js');

exports.getAllModules = (req, res, next) =>
  modulesServices
    .getAll()
    .then(modules => res.status(200).send(modules))
    .catch(err => next(err));

exports.createModule = (req, res, next) =>
  modulesServices
    .createOne(req.body)
    .then(() => res.status(201).send())
    .catch(err => next(err));

exports.modifyModule = (req, res, next) =>
  modulesServices
    .modifyOne(req.body)
    .then(() => res.status(201).send())
    .catch(err => next(err));

exports.deleteModule = (req, res, next) =>
  modulesServices
    .deleteOne(req.param.uniqueKey)
    .then(res.status(200).end())
    .catch(err => next(err));
