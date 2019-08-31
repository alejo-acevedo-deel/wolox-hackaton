const { modules: Module } = require('../models');
const { databaseError, badRequestError } = require('../errors');

exports.createOne = body =>
  Module.create({
    name: body.name,
    description: body.descript,
    uniqueKey: body.uniqueKey,
    new: true,
    ip: body.ip
  }).catch(err => {
    if (err.message === 'Validation error') throw badRequestError('Unique key alredy exist');
    throw databaseError(err.message);
  });

exports.getAll = () =>
  Module.findAll().catch(err => {
    throw databaseError(err.message);
  });

exports.modifyOne = body =>
  Module.findOne({ where: { uniqueKey: body.uniqueKey } }).then(mod =>
    mod
      .update({
        name: body.name && mod.name,
        descript: body.descript && mod.descript,
        new: false,
        ip: body.ip && mod.ip
      })
      .catch(err => {
        throw databaseError(err.message);
      })
  );

exports.deleteOne = uniqueKey =>
  Module.destroy({ where: { uniqueKey } }).catch(err => {
    throw databaseError(err.message);
  });
