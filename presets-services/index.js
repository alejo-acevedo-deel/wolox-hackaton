const Redis = require('ioredis');
const moment = require('moment');
const redis = new Redis();
const pubs = new Redis();
const schedule = require('node-schedule');
const { modules: Module, presets: Presets } = require('../backen-hub/app/models');
const config = require('../backen-hub/config');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const getModulesInterval = 5 * 1000;
const getPresetsInterval = 1 * 60 * 1000;
console.log(JSON.stringify(config));

Module.findAll().then(mods => {
  return mods.forEach(mod => {
    mod.update({ new: false });
    console.log(`New module ${mod.uniqueKey}`);
    return redis.subscribe(mod.uniqueKey);
  });
});

setInterval(() => {
  console.log('Buscando modulos ...');
  return Module.findAll({ where: { new: true } }).then(mods => {
    return mods.forEach(mod => {
      mod.update({ new: false });
      console.log(`New module ${mod.uniqueKey}`);
      return redis.subscribe(mod.uniqueKey);
    });
  });
}, getModulesInterval);

setInterval(() => {
  const nowH = moment().hour();
  const nowM = moment().minute();
  Presets.findAll({ where: { startHour: Number(nowH), startMinute: Number(nowM) } }).then(presets => {
    return presets.forEach(preset => {
      console.log(`Publish message ${preset.actionStart}`);
      pubs.publish(preset.modOut, preset.actionStart);
    });
  });
  return Presets.findAll({ where: { endHour: Number(nowH), endMinute: Number(nowM) } }).then(presets => {
    return presets.forEach(preset => {
      console.log(`Publish message ${preset.actionEnd}`);
      pubs.publish(preset.modOut, preset.actionEnd);
    });
  });
}, getPresetsInterval);

redis.on('message', (channel, message) => {
  const nowH = moment().hour();
  const nowM = moment().minute();
  console.log(`Message from module ${channel} with message ${message}`);
  return Presets.findAll({
    where: {
      modIn: channel
    }
  }).then(presets => {
    const presetFiltered = presets.filter(preset => {
      const startTime = moment();
      startTime.set({ hour: preset.startHour, minute: preset.startMinute });
      const endTime = moment();
      endTime.set({ hour: preset.endHour, minute: preset.endMinute });
      return moment().isAfter(startTime) && moment().isBefore(endTime);
    });
    return presetFiltered.forEach(preset => {
      if (Number(preset.level) < Number(message)) {
        console.log(`Publish message ${preset.actionOn} to  module ${preset.modOut}`);
        pubs.publish(preset.modOut, preset.actionOn);
      }
      if (Number(preset.level) > Number(message)) {
        console.log(`Publish message ${preset.actionOff} to  module ${preset.modOut}`);
        pubs.publish(preset.modOut, preset.actionOff);
      }
    });
  });
});
