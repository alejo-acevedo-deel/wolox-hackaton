const { presets: Preset } = require('../models');
const { databaseError, badRequestError } = require('../errors');

exports.createOne = body =>
  Preset.create({
    name: body.name,
    startHour: body.startHour,
    startMinute: body.startMinute,
    endHour: body.endHour,
    endMinute: body.endMinute,
    level: body.level,
    modIn: body.modIn,
    modOut: body.modOut,
    actionStart: body.actionStart,
    actionEnd: body.actionEnd,
    actionOn: body.actionOn,
    actionOff: body.actionOff
  }).catch(err => {
    if (err.message === 'Validation error') throw badRequestError('Unique key alredy exist');
  });

exports.getAll = () =>
  Preset.findAll().catch(err => {
    throw databaseError(err.message);
  });

exports.deleteOne = id =>
  Preset.destroy({ where: { id } }).catch(err => {
    throw databaseError(err.message);
  });
