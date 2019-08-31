const redis = require('redis');
const sub = redis.createClient();
const Influx = require('influx');
const config = require('./config/db');
const { logger } = require('express-wolox-logger');

const influx = new Influx.InfluxDB({
  host: config.host,
  database: config.database,
  schema: config.schema
});

influx.createDatabase(config.database)
.then( () => logger.info(`Database ${config.database} started`))
.catch(err => {
  logger.info(`Error starting Influx database!`);
})

sub.monitor((err, res) => {
  logger.info('Entering logger mode.');
});

sub.on('monitor', (time, args) => {
  const objRec = {};
  if( args[0] === 'PUBLISH') {
    objRec.key = args[1];
    objRec.time = time;
    objRec.value = args[2];
    
    return influx.writePoints([
      {
        measurement: objRec.key,
        tags: { host: 'raspi' },
        fields: { value: objRec.value }
      }
    ])
    .then( () => logger.info(`Data stored: ${JSON.stringify(objRec)}`))
    .catch(err => {
      logger.console.error(`Error saving data to InfluxDB! ${err.stack}`);
    })
  }
});
